import { crearTarea } from '../modelos/tarea.js';
import type { Tarea, Estado, Dificultad } from '../modelos/tarea.js';

// Mismo molde que Tarea, pero con estado y dificultad admitiendo "undefined" explícito
export type CambiosTarea = Partial<Omit<Tarea, 'estado' | 'dificultad'>> & {
  estado?: Estado | undefined;
  dificultad?: Dificultad | undefined;
};

let tareas: Tarea[] = [];

export function agregarTarea(
  titulo: string,
  descripcion: string,
  vencimiento?: Date,
  dificultad?: Dificultad,
  estado?: Estado
): void {
  const nuevaTarea = crearTarea(titulo, descripcion, vencimiento, dificultad, estado);
  tareas.push(nuevaTarea);
}

export function obtenerTareas(): Tarea[] {
  return tareas;
}

export function editarTarea(tarea: Tarea, cambios: CambiosTarea): void {
  Object.assign(tarea, cambios);
  tarea.ultimaEdicion = new Date();
}