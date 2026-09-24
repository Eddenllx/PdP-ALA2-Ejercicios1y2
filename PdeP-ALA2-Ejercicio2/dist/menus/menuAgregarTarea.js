import readlineSync from 'readline-sync';
import { agregarTarea } from '../servicios/serviciosTareas.js';
import { pedirEstado, pedirDificultad } from '../utilidades/validaciones.js';
import { parsearFecha } from '../utilidades/formato.js';
export function mostrarMenuAgregarTarea() {
    console.log('\nEstás creando una nueva tarea.\n');
    const titulo = readlineSync.question('1. Ingresa el Título: ');
    const descripcion = readlineSync.question('2. Ingresa la descripción: ');
    const estado = pedirEstado();
    const dificultad = pedirDificultad();
    const vencimientoTexto = readlineSync.question('5. Vencimiento: ');
    const vencimiento = parsearFecha(vencimientoTexto);
    agregarTarea(titulo, descripcion, vencimiento, dificultad, estado);
    console.log('\n¡Datos guardados!\n');
    readlineSync.keyInPause('Presiona cualquier tecla para continuar ...', { guide: false });
}
//# sourceMappingURL=menuAgregarTarea.js.map