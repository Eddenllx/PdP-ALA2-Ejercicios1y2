import readlineSync from 'readline-sync';
import { obtenerTareas } from '../servicios/serviciosTareas.js';
import type { Tarea } from '../modelos/tarea.js';
import { mostrarMenuDetalleTarea } from './menuDetalleTarea.js';

export function mostrarMenuVerTareas(): void {
  let volver = false;

  while (!volver) {
    console.log('\n¿Qué tareas deseas ver?\n');
    console.log('   [1] Todas');
    console.log('   [2] Pendientes');
    console.log('   [3] En curso');
    console.log('   [4] Terminadas');
    console.log('   [0] Volver\n');

    const opcion = readlineSync.question('Ingrese una opción: ');

    let tareasFiltradas: Tarea[] | undefined;

    switch (opcion) {
      case '1':
        tareasFiltradas = obtenerTareas();
        break;
      case '2':
        tareasFiltradas = obtenerTareas().filter(t => t.estado === 'Pendiente');
        break;
      case '3':
        tareasFiltradas = obtenerTareas().filter(t => t.estado === 'En curso');
        break;
      case '4':
        tareasFiltradas = obtenerTareas().filter(t => t.estado === 'Terminada');
        break;
      case '0':
        volver = true;
        break;
      default:
        console.log('Opción inválida, intente de nuevo.');
    }

    if (tareasFiltradas) {
      mostrarListado(tareasFiltradas);
    }
  }
}

export function mostrarListado(tareas: Tarea[]): void {
  // Ordena alfabéticamente por título, sin modificar el array original
  const ordenadas = [...tareas].sort((a, b) => a.titulo.localeCompare(b.titulo));

  console.log('\nEstas son tus tareas.\n');
  ordenadas.forEach((tarea, indice) => {
    console.log(`[${indice + 1}] ${tarea.titulo}`);
  });

  console.log('\n¿Deseas ver los detalles de alguna?');
  const seleccion = readlineSync.question('Introduce el número para verla o 0 para volver: ');

  const numero = Number(seleccion);

  if (numero === 0 || isNaN(numero) || numero > ordenadas.length) {
    return;
  }

  // El "!" confirma que en esta posición sí hay una tarea, porque ya validamos el rango arriba
  mostrarMenuDetalleTarea(ordenadas[numero - 1]!);
}