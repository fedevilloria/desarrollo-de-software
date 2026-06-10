/**
 * EJERCICIO 3: Análisis de Texto
 * ================================
 * Practica: strings, split, join, map, filter, reduce, sort
 *
 * Completa cada función usando los tipos definidos.
 * NO modifiques las interfaces ni las firmas de las funciones.
 */

export interface PalabraFrecuencia {
  palabra: string;
  frecuencia: number;
}

export interface AnalisisTexto {
  totalPalabras: number;
  totalCaracteres: number; // sin contar espacios
  palabrasMasFrequentes: PalabraFrecuencia[]; // top 3
  esPalindromo: boolean; // toda la frase ignorando espacios y mayúsculas
}

// ─── FUNCIONES A COMPLETAR ────────────────────────────────────────────────────

/**
 * 3a. Convierte un texto a un array de palabras en minúsculas, sin espacios vacíos.
 *     Elimina signos de puntuación: . , ! ? ; :
 *
 * Ejemplo:
 *   tokenizar("Hola, mundo!") => ["hola", "mundo"]
 */
export function tokenizar(texto: string): string[] {
  // TODO: implementar
  throw new Error("No implementado");
}

/**
 * 3b. Cuenta cuántas veces aparece cada palabra en el array.
 *     Retorna un array de PalabraFrecuencia ordenado de mayor a menor frecuencia.
 *
 * Ejemplo:
 *   contarFrecuencias(["el", "gato", "el"]) =>
 *   [{ palabra: "el", frecuencia: 2 }, { palabra: "gato", frecuencia: 1 }]
 */
export function contarFrecuencias(palabras: string[]): PalabraFrecuencia[] {
  // TODO: implementar
  throw new Error("No implementado");
}

/**
 * 3c. Determina si una cadena es palíndromo.
 *     Ignora espacios y diferencias de mayúsculas/minúsculas.
 *
 * Ejemplo:
 *   esPalindromo("Anita lava la tina") => true
 *   esPalindromo("Hola")               => false
 */
export function esPalindromo(texto: string): boolean {
  // TODO: implementar
  throw new Error("No implementado");
}

/**
 * 3d. Capitaliza cada palabra del texto (primera letra mayúscula, resto minúscula).
 *
 * Ejemplo:
 *   capitalizar("hola MUNDO") => "Hola Mundo"
 */
export function capitalizar(texto: string): string {
  // TODO: implementar
  throw new Error("No implementado");
}

/**
 * 3e. Genera un AnalisisTexto completo a partir de un texto.
 *     Usa las funciones anteriores internamente.
 */
export function analizarTexto(texto: string): AnalisisTexto {
  // TODO: implementar
  throw new Error("No implementado");
}
