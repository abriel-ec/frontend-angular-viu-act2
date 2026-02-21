import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBarModule, MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [
    CommonModule, ReactiveFormsModule,
    MatCardModule, MatInputModule, MatButtonModule,
    MatIconModule, MatSlideToggleModule, MatSnackBarModule
  ],
  templateUrl: './perfil.html',
  styleUrl: './perfil.css'
})
export class Perfil implements OnInit {

  perfilForm!: FormGroup;
  configForm!: FormGroup;

  constructor(private fb: FormBuilder, private snackBar: MatSnackBar) { }

  ngOnInit() {
    // Inicializar formularios con datos simulados del usuario logueado
    this.perfilForm = this.fb.group({
      nombre: ['Juan', Validators.required],
      apellido: ['Pérez', Validators.required],
      email: ['juan.perez@email.com', [Validators.required, Validators.email]],
      telefono: ['+34 600 123 456', Validators.required],
      direccion: ['Calle Falsa 123, Madrid']
    });

    this.configForm = this.fb.group({
      notificacionesEmail: [true],
      notificacionesSMS: [false],
      promociones: [true],
      recordatorioClases: [true]
    });
  }

  guardarPerfil() {
    if (this.perfilForm.valid) {
      this.snackBar.open('Datos personales actualizados correctamente', 'Cerrar', { duration: 3000 });
    }
  }

  guardarConfiguracion() {
    this.snackBar.open('Preferencias guardadas correctamente', 'Cerrar', { duration: 3000 });
  }
}
