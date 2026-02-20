import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@Component({
  selector: 'app-dashboard-admin',
  standalone: true,
  imports: [
    CommonModule, MatCardModule, MatIconModule, MatProgressBarModule
  ],
  templateUrl: './dashboard-admin.html',
  styleUrl: './dashboard-admin.css'
})
export class DashboardAdmin implements OnInit {
  adminName = 'Super Admin';

  // Métricas Clave
  ingresosMes = 15420.50;
  nuevosSocios = 124;
  asistenciasHoy = 856;
  sedesActivas = 3;

  // Datos para gráficas simuladas (Barras de progreso por ahora)
  membresiasActivas = {
    premium: { cantidad: 450, porcentaje: 60 },
    basico: { cantidad: 250, porcentaje: 33 },
    diario: { cantidad: 50, porcentaje: 7 }
  };

  alertasInventario = [
    { producto: 'Proteína Whey 2kg', sede: 'GymZone Centro', stock: 5 },
    { producto: 'Toallas Gym', sede: 'GymZone Norte', stock: 2 }
  ];

  ngOnInit() {
    const name = localStorage.getItem('name');
    if (name) {
      this.adminName = name;
    }
  }
}
