import type { Dificultad } from '../modelos/tarea.js';

// Convierte la dificultad a su representación con estrellas
export function formatearDificultad(dificultad: Dificultad): string {
  switch (dificultad) {
    case 'Fácil':
      return '★☆☆';
    case 'Medio':
      return '★★☆';
    case 'Difícil':
      return '★★★';
    default:
      return 'Sin datos';
  }
}

// Convierte un Date a texto legible DD/MM/AAAA. Si no hay fecha, avisa con "Sin Datos"
export function formatearFecha(fecha?: Date): string {
  if (!fecha) {
    return 'Sin Datos';
  }

  const dia = fecha.getDate();
  const mes = fecha.getMonth() + 1;
  const anio = fecha.getFullYear();

  return `${String(dia).padStart(2, '0')}/${String(mes).padStart(2, '0')}/${anio}`;
}

// Convierte un texto "DD/MM/AAAA" a un objeto Date válido
export function parsearFecha(texto: string): Date | undefined {
  if (!texto || texto.trim() === '') {
    return undefined;
  }

  const partes = texto.split('/');
  const dia = Number(partes[0]);
  const mes = Number(partes[1]) - 1;
  const anio = Number(partes[2]);

  return new Date(anio, mes, dia);
}