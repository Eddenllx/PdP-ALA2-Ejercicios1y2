import readlineSync from 'readline-sync';
import { editarTarea } from '../servicios/serviciosTareas.js';
import { convertirEstado, convertirDificultad } from '../utilidades/validaciones.js';
import { parsearFecha } from '../utilidades/formato.js';
export function mostrarMenuEdicionTarea(tarea) {
    console.log(`\nEstás editando la tarea ${tarea.titulo}.\n`);
    console.log('- Si deseas mantener los valores de un atributo, simplemente déjalo en blanco.');
    console.log('- Si deseas dejar en blanco un atributo, escribe un espacio.\n');
    const cambios = {};
    // Título: no puede quedar vacío, por eso no se permite "espacio para vaciar"
    const nuevoTitulo = readlineSync.question('1. Ingresa el Título: ');
    if (nuevoTitulo !== '') {
        cambios.titulo = nuevoTitulo;
    }
    const nuevaDescripcion = readlineSync.question('2. Ingresa la descripción: ');
    if (nuevaDescripcion !== '') {
        // Si escribió solo un espacio, lo guardamos como vacío real
        cambios.descripcion = nuevaDescripcion.trim() === '' ? '' : nuevaDescripcion;
    }
    const nuevoEstado = readlineSync.question('3. Estado ([P]endiente / [E]n curso / [T]erminada / [C]ancelada): ');
    if (nuevoEstado !== '') {
        cambios.estado = convertirEstado(nuevoEstado);
    }
    const nuevaDificultad = readlineSync.question('4. Dificultad ([1] / [2] / [3]): ');
    if (nuevaDificultad !== '') {
        cambios.dificultad = convertirDificultad(nuevaDificultad);
    }
    const nuevoVencimiento = readlineSync.question('5. Vencimiento: ');
    if (nuevoVencimiento !== '') {
        cambios.vencimiento = parsearFecha(nuevoVencimiento);
    }
    editarTarea(tarea, cambios);
    console.log('\n¡Datos guardados!\n');
    readlineSync.keyInPause('Presiona cualquier tecla para continuar...', { guide: false });
}
//# sourceMappingURL=menuEdicionTarea.js.map