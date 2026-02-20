import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { MatDividerModule } from '@angular/material/divider';
import { MatSnackBarModule, MatSnackBar } from '@angular/material/snack-bar';

export interface Producto {
  id: number;
  nombre: string;
  categoria: string;
  precioOriginal: number;
  precioFinal: number;
  imagen: string;
  stock: number;
}

@Component({
  selector: 'app-tienda',
  standalone: true,
  imports: [
    CommonModule, MatCardModule, MatButtonModule,
    MatIconModule, MatBadgeModule, MatDividerModule, MatSnackBarModule
  ],
  templateUrl: './tienda.html',
  styleUrl: './tienda.css'
})
export class Tienda implements OnInit {

  // Asumimos que el usuario tiene un 15% de Dcto por su membresía actual
  descuentoMembresia = 0.15;

  catalogo: Producto[] = [
    { id: 101, nombre: 'Proteína Whey Gold 2lbs', categoria: 'Suplementos', precioOriginal: 75.00, precioFinal: 0, stock: 15, imagen: 'https://placehold.co/200x200/eee/999?text=Whey+Protein' },
    { id: 102, nombre: 'Creatina Monohidratada 300g', categoria: 'Suplementos', precioOriginal: 35.00, precioFinal: 0, stock: 8, imagen: 'https://placehold.co/200x200/eee/999?text=Creatina' },
    { id: 201, nombre: 'Camiseta DryFit GymZone', categoria: 'Ropa', precioOriginal: 25.00, precioFinal: 0, stock: 20, imagen: 'https://placehold.co/200x200/eee/999?text=Camiseta' },
    { id: 202, nombre: 'Toalla Microfibra', categoria: 'Accesorios', precioOriginal: 12.00, precioFinal: 0, stock: 50, imagen: 'https://placehold.co/200x200/eee/999?text=Toalla' },
    { id: 301, nombre: 'Botella Shaker 700ml', categoria: 'Accesorios', precioOriginal: 15.00, precioFinal: 0, stock: 30, imagen: 'https://placehold.co/200x200/eee/999?text=Shaker' }
  ];

  carrito: { producto: Producto, cantidad: number }[] = [];
  mostrarCarrito = false;

  constructor(private snackBar: MatSnackBar) { }

  ngOnInit() {
    // Calcular precios finales aplicando el descuento de membresía
    this.catalogo = this.catalogo.map(prod => ({
      ...prod,
      precioFinal: prod.precioOriginal * (1 - this.descuentoMembresia)
    }));
  }

  agregarAlCarrito(producto: Producto) {
    const itemExistente = this.carrito.find(item => item.producto.id === producto.id);

    if (itemExistente) {
      if (itemExistente.cantidad < producto.stock) {
        itemExistente.cantidad++;
        this.snackBar.open(`${producto.nombre} añadido al carrito`, 'Cerrar', { duration: 2000 });
      } else {
        this.snackBar.open(`No hay más stock disponible de ${producto.nombre}`, 'Cerrar', { duration: 2000 });
      }
    } else {
      this.carrito.push({ producto, cantidad: 1 });
      this.snackBar.open(`${producto.nombre} añadido al carrito`, 'Cerrar', { duration: 2000 });
    }
  }

  removerDelCarrito(index: number) {
    this.carrito.splice(index, 1);
  }

  get totalItemsCarrito(): number {
    return this.carrito.reduce((acc, item) => acc + item.cantidad, 0);
  }

  get totalPagar(): number {
    return this.carrito.reduce((acc, item) => acc + (item.producto.precioFinal * item.cantidad), 0);
  }

  get totalAhorrado(): number {
    const totalOriginal = this.carrito.reduce((acc, item) => acc + (item.producto.precioOriginal * item.cantidad), 0);
    return totalOriginal - this.totalPagar;
  }

  toggleCarrito() {
    this.mostrarCarrito = !this.mostrarCarrito;
  }

  finalizarCompra() {
    if (this.carrito.length === 0) return;

    this.snackBar.open('Procesando pago... ¡Compra realizada con éxito!', 'Cerrar', { duration: 3000 });
    this.carrito = [];
    this.mostrarCarrito = false;
  }
}
