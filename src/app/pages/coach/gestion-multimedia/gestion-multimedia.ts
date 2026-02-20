import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatSnackBarModule, MatSnackBar } from '@angular/material/snack-bar';

export interface VideoTutorial {
  id: number;
  titulo: string;
  maquina: string;
  grupoMuscular: string;
  fechaSubida: string;
  estado: string;
}

const ELEMENT_DATA: VideoTutorial[] = [
  { id: 1, titulo: 'Uso de la Prensa de Piernas', maquina: 'Prensa 45°', grupoMuscular: 'Piernas', fechaSubida: '2026-02-18', estado: 'Publicado' },
  { id: 2, titulo: 'Técnica en Máquina de Remo', maquina: 'Remo Gironda', grupoMuscular: 'Espalda', fechaSubida: '2026-02-15', estado: 'Publicado' },
  { id: 3, titulo: 'Ajustes en Polea Alta', maquina: 'Torre de Poleas', grupoMuscular: 'Tríceps / Espalda', fechaSubida: '2026-02-10', estado: 'Borrador' }
];

@Component({
  selector: 'app-gestion-multimedia',
  standalone: true,
  imports: [
    CommonModule, ReactiveFormsModule,
    MatCardModule, MatInputModule, MatSelectModule,
    MatButtonModule, MatIconModule, MatTableModule, MatSnackBarModule
  ],
  templateUrl: './gestion-multimedia.html',
  styleUrl: './gestion-multimedia.css'
})
export class GestionMultimedia implements OnInit {
  uploadForm!: FormGroup;
  displayedColumns: string[] = ['titulo', 'maquina', 'grupoMuscular', 'estado', 'acciones'];
  dataSource = [...ELEMENT_DATA];
  grupos = ['Pecho', 'Espalda', 'Piernas', 'Hombros', 'Brazos', 'Core', 'Cardio'];

  constructor(private fb: FormBuilder, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.uploadForm = this.fb.group({
      titulo: ['', Validators.required],
      urlVideo: ['', [Validators.required, Validators.pattern(/https?:\/\/.+/)]],
      maquinaAsociada: ['', Validators.required],
      grupoMuscular: ['', Validators.required],
      descripcion: ['']
    });
  }

  onFileSelected(event: any) {
    // Simulación gráfica de la subida de un archivo
    if (event.target.files && event.target.files.length > 0) {
      this.snackBar.open(`Archivo ${event.target.files[0].name} adjuntado.`, 'Ok', { duration: 2000 });
      // Fake filling URL to simulate
      this.uploadForm.patchValue({ urlVideo: 'https://gymzone.com/video/' + event.target.files[0].name });
    }
  }

  subirVideo() {
    if (this.uploadForm.valid) {
      const formValue = this.uploadForm.value;
      const nuevoVideo: VideoTutorial = {
        id: new Date().getTime(),
        titulo: formValue.titulo,
        maquina: formValue.maquinaAsociada,
        grupoMuscular: formValue.grupoMuscular,
        fechaSubida: new Date().toISOString().split('T')[0],
        estado: 'Procesando'
      };

      // Agregamos al principio de la tabla
      this.dataSource = [nuevoVideo, ...this.dataSource];

      this.snackBar.open('¡Video subido y procesando! Estará público en breve.', 'Cerrar', { duration: 4000 });
      this.uploadForm.reset();
    }
  }

  eliminarVideo(id: number) {
    this.dataSource = this.dataSource.filter(v => v.id !== id);
    this.snackBar.open('El video ha sido eliminado.', 'Cerrar', { duration: 2000 });
  }
}
