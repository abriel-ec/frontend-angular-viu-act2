import { Component, TemplateRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatTabsModule } from '@angular/material/tabs';

export interface Ejercicio {
  id: number;
  titulo: string;
  grupoMuscular: string;
  nivel: string;
  duracion: string;
  imagenUrl: string;
  videoUrl: string;
  descripcion: string;
}

@Component({
  selector: 'app-fitness',
  standalone: true,
  imports: [
    CommonModule, MatCardModule, MatButtonModule,
    MatIconModule, MatChipsModule, MatDialogModule, MatTabsModule
  ],
  templateUrl: './fitness.html',
  styleUrl: './fitness.css'
})
export class Fitness {

  @ViewChild('videoDialog') videoDialog!: TemplateRef<any>;

  ejercicioSeleccionado: Ejercicio | null = null;

  rutinas: Ejercicio[] = [
    {
      id: 1,
      titulo: 'Sentadilla Libre Perfecta',
      grupoMuscular: 'Piernas',
      nivel: 'Intermedio',
      duracion: '12 min',
      imagenUrl: 'https://placehold.co/400x250/333/fff?text=Sentadillas',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Placeholder
      descripcion: 'Aprende la técnica correcta para realizar sentadillas libres evitando lesiones.'
    },
    {
      id: 2,
      titulo: 'Press de Banca Plano',
      grupoMuscular: 'Pecho',
      nivel: 'Avanzado',
      duracion: '15 min',
      imagenUrl: 'https://placehold.co/400x250/333/fff?text=Press+de+Banca',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      descripcion: 'Maximiza tu fuerza en el pecho con este ejercicio fundamental.'
    },
    {
      id: 3,
      titulo: 'Rutina Abdomen en 10 Min',
      grupoMuscular: 'Core',
      nivel: 'Principiante',
      duracion: '10 min',
      imagenUrl: 'https://placehold.co/400x250/333/fff?text=Abdomen',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      descripcion: 'Fortalece tu core con esta rutina rápida e intensa sin equipo.'
    },
    {
      id: 4,
      titulo: 'Dominadas y Variaciones',
      grupoMuscular: 'Espalda',
      nivel: 'Intermedio',
      duracion: '20 min',
      imagenUrl: 'https://placehold.co/400x250/333/fff?text=Dominadas',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      descripcion: 'Progresiones para lograr tu primera dominada y variaciones avanzadas.'
    }
  ];

  categorias = ['Todos', 'Piernas', 'Pecho', 'Espalda', 'Core', 'Cardio'];
  categoriaSeleccionada = 'Todos';

  constructor(private dialog: MatDialog) { }

  get rutinasFiltradas() {
    if (this.categoriaSeleccionada === 'Todos') {
      return this.rutinas;
    }
    return this.rutinas.filter(r => r.grupoMuscular === this.categoriaSeleccionada);
  }

  seleccionarCategoria(cat: string) {
    this.categoriaSeleccionada = cat;
  }

  abrirVideo(ejercicio: Ejercicio) {
    this.ejercicioSeleccionado = ejercicio;
    this.dialog.open(this.videoDialog, {
      width: '800px',
      maxWidth: '95vw',
      panelClass: 'video-dialog-container'
    });
  }

  cerrarVideo() {
    this.dialog.closeAll();
    // Pequeño timeout para limpiar el seleccionado tras la animación de cierre
    setTimeout(() => this.ejercicioSeleccionado = null, 300);
  }
}
