import type { Tarea, Estado, Dificultad } from '../modelos/tarea.js';
export type CambiosTarea = Partial<Omit<Tarea, 'estado' | 'dificultad'>> & {
    estado?: Estado | undefined;
    dificultad?: Dificultad | undefined;
};
export declare function agregarTarea(titulo: string, descripcion: string, vencimiento?: Date, dificultad?: Dificultad, estado?: Estado): void;
export declare function obtenerTareas(): Tarea[];
export declare function editarTarea(tarea: Tarea, cambios: CambiosTarea): void;
//# sourceMappingURL=serviciosTareas.d.ts.map