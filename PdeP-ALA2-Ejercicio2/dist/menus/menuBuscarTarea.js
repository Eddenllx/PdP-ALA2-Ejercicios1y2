import readlineSync from 'readline-sync';
import { obtenerTareas } from '../servicios/serviciosTareas.js';
import { mostrarListado } from './menuVerTareas.js';
export function mostrarMenuBuscarTarea() {
    console.log('\nIntroduce el título de una Tarea para buscarla:');
    const busqueda = readlineSync.question('> ');
    // toLowerCase() en ambos lados para que la búsqueda no distinga mayúsculas/minúsculas
    const resultados = obtenerTareas().filter(t => t.titulo.toLowerCase().includes(busqueda.toLowerCase()));
    if (resultados.length === 0) {
        console.log('\nNo hay tareas relacionadas con la búsqueda.\n');
        readlineSync.keyInPause('Presiona cualquier tecla para continuar...', { guide: false });
        return;
    }
    console.log('\nEstas son las tareas relacionadas:\n');
    mostrarListado(resultados);
}
//# sourceMappingURL=menuBuscarTarea.js.map