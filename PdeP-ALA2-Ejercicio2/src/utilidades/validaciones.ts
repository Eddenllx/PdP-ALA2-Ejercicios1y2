import readlineSync from 'readline-sync';
import type { Estado, Dificultad } from '../modelos/tarea.js';

export function pedirEstado(): Estado {
  const opciones: Record<string, Estado> = { P: 'Pendiente', E: 'En curso', T: 'Terminada', C: 'Cancelada' };
  let entrada: string;

  do {
    entrada = readlineSync.question('3. Estado ([P]endiente / [E]n curso / [T]erminada / [C]ancelada): ').toUpperCase();
  } while (!opciones[entrada]);

  // El "!" le confirma a TS que acá sí existe, porque el bucle no deja salir hasta que sea válido
  return opciones[entrada]!;
}

export function pedirDificultad(): Dificultad {
  const opciones: Record<string, Dificultad> = { '1': 'Fácil', '2': 'Medio', '3': 'Difícil' };
  let entrada: string;

  do {
    entrada = readlineSync.question('4. Dificultad: ([1] / [2] / [3]): ');
  } while (!opciones[entrada]);

  return opciones[entrada]!;
}

export function convertirEstado(letra: string): Estado | undefined {
  const opciones: Record<string, Estado> = { P: 'Pendiente', E: 'En curso', T: 'Terminada', C: 'Cancelada' };
  // Acá NO se usa "!" porque esta función no valida: puede devolver undefined de verdad
  return opciones[letra.toUpperCase()];
}

export function convertirDificultad(numero: string): Dificultad | undefined {
  const opciones: Record<string, Dificultad> = { '1': 'Fácil', '2': 'Medio', '3': 'Difícil' };
  return opciones[numero];
}