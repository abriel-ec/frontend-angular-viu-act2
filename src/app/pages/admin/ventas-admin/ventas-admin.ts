import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatPaginatorModule, MatPaginator } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

export interface VentaRegistro {
  idTicket: string;
  cliente: string;
  fecha: string;
  total: number;
  metodoPago: string;
  estado: string;
  items: string;
}

const VENTAS_DUMMY: VentaRegistro[] = [
  { idTicket: 'V-1025', cliente: 'Carlos Díaz', fecha: '2023-11-20 14:30', total: 65.98, metodoPago: 'Tarjeta', estado: 'Completada', items: '2x Whey, 1x Toalla' },
  { idTicket: 'V-1024', cliente: 'Ana López', fecha: '2023-11-20 13:15', total: 29.99, metodoPago: 'Tarjeta', estado: 'Completada', items: 'Básico Mensual' },
  { idTicket: 'V-1023', cliente: 'Invitado', fecha: '2023-11-20 12:00', total: 5.99, metodoPago: 'Efectivo', estado: 'Completada', items: 'Pase 1 Día' },
  { idTicket: 'V-1022', cliente: 'Roberto G.', fecha: '2023-11-19 18:45', total: 3.50, metodoPago: 'Efectivo', estado: 'Completada', items: 'Bebida Isotónica' },
  { idTicket: 'V-1021', cliente: 'Martín P.', fecha: '2023-11-19 16:20', total: 120.00, metodoPago: 'Tarjeta', estado: 'Devolución', items: 'Zapatillas Gym' },
];

@Component({
  selector: 'app-ventas-admin',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule, MatTableModule, MatPaginatorModule,
    MatInputModule, MatFormFieldModule, MatIconModule,
    MatButtonModule, MatChipsModule,
    MatDatepickerModule, MatNativeDateModule
  ],
  templateUrl: './ventas-admin.html',
  styleUrl: './ventas-admin.css'
})
export class VentasAdmin implements AfterViewInit {

  displayedColumns: string[] = ['ticket', 'fecha', 'cliente', 'items', 'metodo', 'total', 'estado', 'acciones'];
  dataSource = new MatTableDataSource<VentaRegistro>(VENTAS_DUMMY);

  // Resumen Finanzas
  ventasHoy = 452.50;
  ventasSemana = 3240.00;
  ticketsHoy = 24;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
