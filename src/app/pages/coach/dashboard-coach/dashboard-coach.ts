import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@Component({
  selector: 'app-dashboard-coach',
  standalone: true,
  imports: [
    CommonModule, MatCardModule, MatButtonModule,
    MatIconModule, MatDividerModule, MatProgressBarModule
  ],
  templateUrl: './dashboard-coach.html',
  styleUrl: './dashboard-coach.css'
})
export class DashboardCoach implements OnInit {
  nombreCoach = '';

  // Resumen del día
  clasesHoy = 3;
  alumnosAtendidos = 45;
  nuevosVideos = 1;

  // Próximas clases simuladas
  proximasClases = [
    { hora: '10:00 AM', nombre: 'Spinning Force', sala: 'Sala 1', ocupacion: 15, capacidad: 20 },
    { hora: '14:00 PM', nombre: 'CrossFit WOD', sala: 'Zona Libre', ocupacion: 12, capacidad: 12 },
    { hora: '18:30 PM', nombre: 'Yoga Relax', sala: 'Sala Zen', ocupacion: 8, capacidad: 15 }
  ];

  ngOnInit() {
    const name = localStorage.getItem('name');
    if (name) {
      this.nombreCoach = name;
    } else {
      this.nombreCoach = 'Carlos Fitness';
    }
  }

  getOcupacionColor(ocupado: number, total: number): string {
    const porcentaje = (ocupado / total) * 100;
    if (porcentaje >= 90) return 'warn';
    if (porcentaje >= 60) return 'accent';
    return 'primary';
  }
}
