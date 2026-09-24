export type Estado = 'Pendiente' | 'En curso' | 'Terminada' | 'Cancelada';
export type Dificultad = 'Fácil' | 'Medio' | 'Difícil';

export interface Tarea {
  titulo: string;
  descripcion: string;
  estado: Estado;
  creacion: Date;
  ultimaEdicion: Date;
  vencimiento?: Date | undefined;
  dificultad: Dificultad;
}

export function crearTarea(
  titulo: string,
  descripcion: string,
  vencimiento?: Date,
  dificultad?: Dificultad,
  estado?: Estado
): Tarea {
  const ahora = new Date();

  const tarea: Tarea = {
    titulo: titulo,
    descripcion: descripcion,
    estado: estado || 'Pendiente',
    creacion: ahora,
    ultimaEdicion: ahora,
    vencimiento: vencimiento,
    dificultad: dificultad || 'Fácil'
  };

  return tarea;
}