import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@Component({
  selector: 'app-reportes-admin',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule, MatTabsModule, MatIconModule,
    MatButtonModule, MatProgressBarModule
  ],
  templateUrl: './reportes-admin.html',
  styleUrl: './reportes-admin.css'
})
export class ReportesAdmin {

  // Métricas Simples Generales
  tasaRetencion = 87.5;
  crecimientoUsuarios = 12.4;
  cac = 15.20; // Costo de Adquisición de Cliente
  ltv = 350.00; // Valor de Vida del Cliente por año

  // Demografía Falsa
  sedesMayorAsistencia = [
    { nombre: 'GymZone Central', porcentaje: 45 },
    { nombre: 'GymZone Downtown', porcentaje: 35 },
    { nombre: 'GymZone Express Sur', porcentaje: 20 }
  ];

  horariosPico = [
    { hora: '18:00 - 20:00', asistentes: 420 },
    { hora: '07:00 - 09:00', asistentes: 315 },
    { hora: '12:00 - 14:00', asistentes: 154 }
  ];
}
