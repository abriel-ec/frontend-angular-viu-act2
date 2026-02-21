import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';

export interface AsistenciaData {
  fecha: string;
  sede: string;
  horaEntrada: string;
  metodo: string;
}

const ELEMENT_DATA: AsistenciaData[] = [
  { fecha: '2026-02-20', sede: 'GymZone Central', horaEntrada: '08:30 AM', metodo: 'QR' },
  { fecha: '2026-02-19', sede: 'GymZone Norte', horaEntrada: '18:15 PM', metodo: 'NFC' },
  { fecha: '2026-02-18', sede: 'GymZone Central', horaEntrada: '07:00 AM', metodo: 'QR' },
  { fecha: '2026-02-16', sede: 'GymZone Sur', horaEntrada: '19:20 PM', metodo: 'QR' },
  { fecha: '2026-02-15', sede: 'GymZone Central', horaEntrada: '08:10 AM', metodo: 'QR' },
];

@Component({
  selector: 'app-asistencias',
  standalone: true,
  imports: [
    CommonModule, MatCardModule, MatTableModule,
    MatIconModule, MatButtonModule, MatPaginatorModule
  ],
  templateUrl: './asistencias.html',
  styleUrl: './asistencias.css'
})
export class Asistencias {
  displayedColumns: string[] = ['fecha', 'sede', 'horaEntrada', 'metodo'];
  dataSource = ELEMENT_DATA;
  socioNombre = 'Juan Pérez';
  socioId = 'GZ-892410';
}
