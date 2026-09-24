export function crearTarea(titulo, descripcion, vencimiento, dificultad, estado) {
    const ahora = new Date();
    const tarea = {
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
//# sourceMappingURL=tarea.js.map