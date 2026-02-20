import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'app-membresias-admin',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule, MatTabsModule, MatTableModule,
    MatIconModule, MatButtonModule, MatProgressBarModule,
    MatChipsModule
  ],
  templateUrl: './membresias-admin.html',
  styleUrl: './membresias-admin.css'
})
export class MembresiasAdmin {
  planesConfigurados = [
    { nombre: 'Plan Anual Premium', precio: 350.00, activos: 450, estado: 'Activo' },
    { nombre: 'Plan Mensual Básico', precio: 29.99, activos: 850, estado: 'Activo' },
    { nombre: 'Pase 1 Día', precio: 5.99, activos: 15, estado: 'Activo' },
    { nombre: 'Plan Estudiantes', precio: 19.99, activos: 0, estado: 'Inactivo' }
  ];

  displayedColumnsIngresos: string[] = ['ticket', 'socio', 'plan', 'fecha', 'monto'];
  ingresosRecientes = [
    { idTicket: 'T-1025', socio: 'Juan Pérez', plan: 'Anual Premium', fecha: '2023-11-20', monto: 350.00 },
    { idTicket: 'T-1024', socio: 'María Gómez', plan: 'Mensual Básico', fecha: '2023-11-19', monto: 29.99 },
    { idTicket: 'T-1023', socio: 'Carlos Díaz', plan: 'Pase 1 Día', fecha: '2023-11-19', monto: 5.99 },
    { idTicket: 'T-1022', socio: 'Ana López', plan: 'Trimestral Plus', fecha: '2023-11-18', monto: 85.00 },
  ];

  calcularProgresoVentas(activos: number): number {
    return Math.min((activos / 1000) * 100, 100);
  }
}
