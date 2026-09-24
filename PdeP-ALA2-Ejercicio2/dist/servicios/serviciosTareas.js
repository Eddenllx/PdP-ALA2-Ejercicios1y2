import { crearTarea } from '../modelos/tarea.js';
let tareas = [];
export function agregarTarea(titulo, descripcion, vencimiento, dificultad, estado) {
    const nuevaTarea = crearTarea(titulo, descripcion, vencimiento, dificultad, estado);
    tareas.push(nuevaTarea);
}
export function obtenerTareas() {
    return tareas;
}
export function editarTarea(tarea, cambios) {
    Object.assign(tarea, cambios);
    tarea.ultimaEdicion = new Date();
}
//# sourceMappingURL=serviciosTareas.js.map