import readlineSync from 'readline-sync';
import { agregarTarea } from '../servicios/serviciosTareas.js';
import { pedirEstado, pedirDificultad } from '../utilidades/validaciones.js';
import { parsearFecha } from '../utilidades/formato.js';

export function mostrarMenuAgregarTarea(): void {
  console.log('\nEstás creando una nueva tarea.\n');

  const titulo: string = readlineSync.question('1. Ingresa el Título: ');
  const descripcion: string = readlineSync.question('2. Ingresa la descripción: ');
  const estado = pedirEstado();
  const dificultad = pedirDificultad();
  const vencimientoTexto: string = readlineSync.question('5. Vencimiento: ');

  const vencimiento = parsearFecha(vencimientoTexto);

  agregarTarea(titulo, descripcion, vencimiento, dificultad, estado);

  console.log('\n¡Datos guardados!\n');
  readlineSync.keyInPause('Presiona cualquier tecla para continuar ...', { guide: false });
}