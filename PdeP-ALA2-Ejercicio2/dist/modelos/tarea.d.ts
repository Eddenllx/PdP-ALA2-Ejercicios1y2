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
export declare function crearTarea(titulo: string, descripcion: string, vencimiento?: Date, dificultad?: Dificultad, estado?: Estado): Tarea;
//# sourceMappingURL=tarea.d.ts.map