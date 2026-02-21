import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule, ReactiveFormsModule, RouterLink,
    MatCardModule, MatInputModule, MatButtonModule,
    MatFormFieldModule, MatIconModule, MatProgressSpinnerModule
  ],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  loginForm: FormGroup;
  errorMessage = '';
  isLoading = false;

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit() {
    if (this.loginForm.invalid) return;

    this.isLoading = true;
    this.errorMessage = '';
    const formData = this.loginForm.value;

    // Simulación de login (temporal hasta conectar con el Endpoint real)
    of({
      success: true,
      user: { name: 'Socio GymZone', email: formData.email, rol: 'Socio' },
      token: 'fake-token-123'
    })
      .pipe(delay(1500)) // Simula el tiempo de red
      .subscribe({
        next: (res) => {
          this.isLoading = false;
          // Guardar variables en localStorage simula sesión (más adelante en AuthService)
          localStorage.setItem('token', res.token);
          localStorage.setItem('role', res.user.rol);

          // Redirigir a Dashboard (entraría al Layout principal)
          this.router.navigate(['/socio/dashboard']);
        },
        error: () => {
          this.isLoading = false;
          this.errorMessage = 'Credenciales inválidas. Por favor, intenta de nuevo.';
        }
      });
  }

  // Acceso rápido para propósitos de Testing o presentación
  loginAs(role: string) {
    this.isLoading = true;
    of({
      success: true,
      user: { name: `Usuario ${role}`, email: `${role.toLowerCase()}@gymzone.com`, rol: role },
      token: `fake-token-${role.toLowerCase()}`
    })
      .pipe(delay(400))
      .subscribe({
        next: (res) => {
          this.isLoading = false;
          localStorage.setItem('token', res.token);
          localStorage.setItem('role', res.user.rol);
          this.router.navigate(['/socio/dashboard']);
        }
      });
  }
}
