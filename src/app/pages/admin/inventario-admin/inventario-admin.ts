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
import { MatTooltipModule } from '@angular/material/tooltip';

export interface InventarioItem {
  sku: string;
  producto: string;
  categoria: string;
  sede: string;
  stockActual: number;
  stockMinimo: number;
  estado: string;
}

const INVENTARIO_DUMMY: InventarioItem[] = [
  { sku: 'NUT-001', producto: 'Whey Protein Vainilla 2kg', categoria: 'Nutrición', sede: 'Todas', stockActual: 15, stockMinimo: 20, estado: 'Bajo Stock' },
  { sku: 'NUT-002', producto: 'Creatina Monohidratada 500g', categoria: 'Nutrición', sede: 'GymZone Central', stockActual: 45, stockMinimo: 10, estado: 'Óptimo' },
  { sku: 'ROP-001', producto: 'Camiseta Dry-Fit Hombre (M)', categoria: 'Ropa', sede: 'GymZone Downtown', stockActual: 5, stockMinimo: 15, estado: 'Bajo Stock' },
  { sku: 'ACC-001', producto: 'Toalla Microfibra Gym', categoria: 'Accesorios', sede: 'Todas', stockActual: 120, stockMinimo: 50, estado: 'Óptimo' },
  { sku: 'NUT-003', producto: 'Barrita Energética Chocolate', categoria: 'Nutrición', sede: 'Express Sur', stockActual: 0, stockMinimo: 30, estado: 'Agotado' },
];

@Component({
  selector: 'app-inventario-admin',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule, MatTableModule, MatPaginatorModule,
    MatInputModule, MatFormFieldModule, MatIconModule,
    MatButtonModule, MatChipsModule, MatTooltipModule
  ],
  templateUrl: './inventario-admin.html',
  styleUrl: './inventario-admin.css'
})
export class InventarioAdmin implements AfterViewInit {
  displayedColumns: string[] = ['sku', 'producto', 'categoria', 'sede', 'stock', 'estado', 'acciones'];
  dataSource = new MatTableDataSource<InventarioItem>(INVENTARIO_DUMMY);

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

  getEstadoColor(estado: string): string {
    switch (estado) {
      case 'Óptimo': return 'primary';
      case 'Bajo Stock': return 'accent';
      case 'Agotado': return 'warn';
      default: return '';
    }
  }
}
