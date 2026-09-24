import readlineSync from 'readline-sync';
export function pedirEstado() {
    const opciones = { P: 'Pendiente', E: 'En curso', T: 'Terminada', C: 'Cancelada' };
    let entrada;
    do {
        entrada = readlineSync.question('3. Estado ([P]endiente / [E]n curso / [T]erminada / [C]ancelada): ').toUpperCase();
    } while (!opciones[entrada]);
    // El "!" le confirma a TS que acá sí existe, porque el bucle no deja salir hasta que sea válido
    return opciones[entrada];
}
export function pedirDificultad() {
    const opciones = { '1': 'Fácil', '2': 'Medio', '3': 'Difícil' };
    let entrada;
    do {
        entrada = readlineSync.question('4. Dificultad: ([1] / [2] / [3]): ');
    } while (!opciones[entrada]);
    return opciones[entrada];
}
export function convertirEstado(letra) {
    const opciones = { P: 'Pendiente', E: 'En curso', T: 'Terminada', C: 'Cancelada' };
    // Acá NO se usa "!" porque esta función no valida: puede devolver undefined de verdad
    return opciones[letra.toUpperCase()];
}
export function convertirDificultad(numero) {
    const opciones = { '1': 'Fácil', '2': 'Medio', '3': 'Difícil' };
    return opciones[numero];
}
//# sourceMappingURL=validaciones.js.map