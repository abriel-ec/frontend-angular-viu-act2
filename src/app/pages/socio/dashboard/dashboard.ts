import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDividerModule } from '@angular/material/divider';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule, RouterLink,
    MatCardModule, MatButtonModule, MatIconModule,
    MatProgressBarModule, MatDividerModule, MatChipsModule
  ],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard implements OnInit {
  userName = 'Juan Pérez';
  userRole = 'Socio';

  // Datos simulados de Membresía
  membresiaActiva = true;
  planNombre = 'Plan Anual Premium';
  diasRestantes = 45;
  progresoMembresia = 0; // % consumido

  // Últimas Asistencias simuladas
  ultimasAsistencias = [
    { fecha: 'Hoy, 08:30 AM', sede: 'GymZone Central' },
    { fecha: 'Ayer, 18:15 PM', sede: 'GymZone Norte' },
    { fecha: '18 Feb, 07:00 AM', sede: 'GymZone Central' }
  ];

  ngOnInit() {
    // Calculo simple para la barra de progreso (simulando que un plan anual son 365 días)
    const diasTotales = 365;
    const diasConsumidos = diasTotales - this.diasRestantes;
    this.progresoMembresia = (diasConsumidos / diasTotales) * 100;

    // Aquí idealmente leeríamos del localStorage el nombre y rol guardados en el login
    const savedRole = localStorage.getItem('role');
    if (savedRole) {
      this.userRole = savedRole;
    }
  }
}
