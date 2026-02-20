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
import { MatSnackBarModule, MatSnackBar } from '@angular/material/snack-bar';

export interface UsuarioData {
  id: string;
  nombre: string;
  email: string;
  rol: string;
  estado: string;
  sede: string;
}

const USUARIOS_DUMMY: UsuarioData[] = [
  { id: 'usr-001', nombre: 'Juan Pérez', email: 'juan@email.com', rol: 'Socio', estado: 'Activo', sede: 'Centro' },
  { id: 'usr-002', nombre: 'María García', email: 'maria@email.com', rol: 'Socio', estado: 'Inactivo', sede: 'Norte' },
  { id: 'usr-003', nombre: 'Carlos Fitness', email: 'carlos@gymzone.com', rol: 'Coach', estado: 'Activo', sede: 'Todas' },
  { id: 'usr-004', nombre: 'Ana López', email: 'ana@email.com', rol: 'Socio', estado: 'Activo', sede: 'Sur' },
  { id: 'usr-005', nombre: 'Super Admin', email: 'admin@gymzone.com', rol: 'Admin', estado: 'Activo', sede: 'Central' },
];

@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [
    CommonModule, MatCardModule, MatTableModule, MatPaginatorModule,
    MatInputModule, MatFormFieldModule, MatIconModule, MatButtonModule,
    MatChipsModule, MatSnackBarModule
  ],
  templateUrl: './usuarios.html',
  styleUrl: './usuarios.css'
})
export class Usuarios implements AfterViewInit {
  displayedColumns: string[] = ['id', 'nombre', 'email', 'rol', 'sede', 'estado', 'acciones'];
  dataSource = new MatTableDataSource<UsuarioData>(USUARIOS_DUMMY);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private snackBar: MatSnackBar) { }

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

  editarUsuario(usuario: UsuarioData) {
    this.snackBar.open(`Editando a ${usuario.nombre}...`, 'Cerrar', { duration: 2000 });
  }

  cambiarEstado(usuario: UsuarioData) {
    usuario.estado = usuario.estado === 'Activo' ? 'Inactivo' : 'Activo';
    this.snackBar.open(`Estado de ${usuario.nombre} cambiado a ${usuario.estado}`, 'Cerrar', { duration: 2000 });
  }
}
