import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule, MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-membresias',
  standalone: true,
  imports: [
    CommonModule, MatCardModule, MatButtonModule,
    MatIconModule, MatChipsModule, MatDividerModule,
    MatDialogModule, MatSnackBarModule
  ],
  templateUrl: './membresias.html',
  styleUrl: './membresias.css'
})
export class Membresias {
  // Estado actual del usuario
  miPlanActual = {
    id: 2,
    nombre: 'Plan Anual Premium',
    estado: 'Activo',
    fechaVencimiento: '2027-02-20',
    precio: 899.00
  };

  // Catálogo de planes
  planesDisponibles = [
    {
      id: 1,
      nombre: 'Plan Mensual Base',
      precio: 99.00,
      duracion: 30, // dias
      descuento: 0,
      descuento_prod: 0,
      descripcion: 'Acceso ilimitado a áreas de musculación y cardio en 1 sede.',
      features: ['1 Sede', 'Área de Musculación', 'Cardio', 'Duchas']
    },
    {
      id: 2,
      nombre: 'Plan Anual Premium',
      precio: 899.00,
      duracion: 365,
      descuento: 20,
      descuento_prod: 15,
      descripcion: 'Acceso multisede, clases grupales y descuentos en tienda fitness.',
      features: ['Multisede (5 gimnasios)', 'Clases Grupales', '15% Dcto en Tienda', 'Invitado 1x/mes', 'App Rutinas'],
      popular: true
    },
    {
      id: 3,
      nombre: 'Plan Trimestral Elite',
      precio: 250.00,
      duracion: 90,
      descuento: 10,
      descuento_prod: 5,
      descripcion: 'Entrenamiento personalizado y acceso a áreas VIP.',
      features: ['Multisede', 'Asesoría Nutricional', 'Crossfit & Yoga', '5% Dcto en Tienda']
    }
  ];

  constructor(private snackBar: MatSnackBar) { }

  simularPago(plan: any) {
    this.snackBar.open(`Iniciando pago para ${plan.nombre} por $${plan.precio}...`, 'Cerrar', {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
    });
  }

  gestionarCancelacion() {
    this.snackBar.open('Solicitud de suspensión enviada a administración.', 'Cerrar', {
      duration: 4000,
    });
  }
}
