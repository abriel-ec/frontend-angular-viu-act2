import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-sedes',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule, MatButtonModule, MatIconModule,
    MatProgressBarModule, MatChipsModule, MatDividerModule
  ],
  templateUrl: './sedes.html',
  styleUrl: './sedes.css'
})
export class Sedes {
  listaSedes = [
    {
      nombre: 'GymZone Central',
      ubicacion: 'Av. Principal 123, Centro',
      aforoActual: 180,
      aforoMaximo: 200,
      entrenadores: ['Carlos Díaz', 'Ana Rojas', 'Miguel P.'],
      estado: 'Operativa'
    },
    {
      nombre: 'GymZone Downtown',
      ubicacion: 'Plaza Mayor 45, Distrito Comercial',
      aforoActual: 85,
      aforoMaximo: 150,
      entrenadores: ['Laura M.', 'Pedro G.'],
      estado: 'Operativa'
    },
    {
      nombre: 'GymZone Express Sur',
      ubicacion: 'Av. Sur 789, Las Lomas',
      aforoActual: 0,
      aforoMaximo: 50,
      entrenadores: [],
      estado: 'Mantenimiento'
    }
  ];

  getAforoPorcentaje(actual: number, maximo: number): number {
    if (maximo === 0) return 0;
    return Math.round((actual / maximo) * 100);
  }

  getAforoColor(porcentaje: number): string {
    if (porcentaje >= 90) return 'warn';
    if (porcentaje >= 75) return 'accent';
    return 'primary';
  }
}
