/**
 * EJERCICIO 1: Gestión de Estudiantes
 * =====================================
 * Practica: interfaces, arrays, filter, map, reduce, sort
 *
 * Completa cada función usando los tipos definidos.
 * NO modifiques las interfaces ni las firmas de las funciones.
 */

export interface Estudiante {
  id: number;
  nombre: string;
  apellido: string;
  notas: number[]; // notas del 1 al 10
  curso: string;
}

export interface ResumenEstudiante {
  nombreCompleto: string;
  promedio: number;
  aprobado: boolean; // promedio >= 6
}

// ─── FUNCIONES A COMPLETAR ────────────────────────────────────────────────────

/**
 * 1a. Dado un array de estudiantes, retorna solo los que pertenecen a un curso dado.
 *
 * Ejemplo:
 *   filtrarPorCurso(estudiantes, "3A") => [todos los de 3A]
 */
export function filtrarPorCurso(
  estudiantes: Estudiante[],
  curso: string
): Estudiante[] {
  // TODO: implementar
  return estudiantes.filter((e) => e.curso === curso); /* recorre el array de estudiantes cuando el curso coincide devuelve a los estudiantes que coincidan con el curso buscado. */
}

/**
 * 1b. Calcula el promedio de notas de un estudiante.
 *     Redondea a 2 decimales.
 *
 * Ejemplo:
 *   calcularPromedio({ notas: [8, 6, 10] }) => 8
 */
export function calcularPromedio(estudiante: Estudiante): number {
  // TODO: implementar
  const suma = estudiante.notas.reduce((acc, nota) => acc + nota, 0); /* reduce es un metodo que reduce todos los elementos a un unico valor, aplicando una funcion acumuladora, acc es el acumulador el cual lo inicializo en cero con ,0. Nota es el elemento actual, entonces la suma al acumulador. Sumando asi todas las notas y guardando en la variable suma. */
  const promedio = suma / estudiante.notas.length; /* la suma de las notas la divide por la longitud del array de notas del estudiante. */
  return Math.round(promedio * 100) / 100; /* al promedio lo multiplica por 100 para dejar dos decimales despues de la coma, mathround lo que hace es es redondear al entero mas cercano y luego lo divide por 100 para dejar los dos digitos despues de la coma. */
}

/**
 * 1c. Convierte un array de Estudiante[] en ResumenEstudiante[].
 *     Usa calcularPromedio internamente.
 *
 * Ejemplo:
 *   generarResumenes([{ nombre: "Ana", apellido: "López", notas: [7, 8] }])
 *   => [{ nombreCompleto: "Ana López", promedio: 7.5, aprobado: true }]
 */
export function generarResumenes(
  estudiantes: Estudiante[]
): ResumenEstudiante[] {
  // TODO: implementar
  return estudiantes.map((e) => ({
    nombreCompleto: `${e.nombre} ${e.apellido}`,
    promedio: calcularPromedio(e),
    aprobado: calcularPromedio(e) >= 6,
  })); /* el metodo map recorre el array de estudiantes y devuelve un nuevo array con los resultados de la funcion que se le pasa. En este caso, para cada estudiante e, se crea un objeto con las propiedades nombreCompleto, promedio y aprobado. El nombreCompleto se forma concatenando el nombre y apellido del estudiante, el promedio se calcula usando la funcion calcularPromedio y aprobado es true si el promedio es mayor o igual a 6. */
}

/**
 * 1d. Retorna los estudiantes ordenados por promedio de mayor a menor.
 *
 * Ejemplo:
 *   ordenarPorPromedio([ana(prom=6), bob(prom=9)]) => [bob, ana]
 */
export function ordenarPorPromedio(estudiantes: Estudiante[]): Estudiante[] {
  // TODO: implementar
  return estudiantes.sort((a, b) => calcularPromedio(b) - calcularPromedio(a)); /* el metodo sort ordena los elementos de un array in place y devuelve el array ordenado. La funcion que se le pasa como argumento es una funcion de comparacion que determina el orden de los elementos. En este caso, se compara el promedio de dos estudiantes a y b, restando el promedio de b al promedio de a. Si el resultado es negativo, a se ordena antes que b, si es positivo, b se ordena antes que a, y si es cero, no se cambia el orden. Al restar el promedio de b al promedio de a, se logra ordenar de mayor a menor. */
}

/**
 * 1e. Retorna el promedio general de todos los estudiantes del array.
 *     Si el array está vacío, retorna 0.
 */
export function promedioGeneral(estudiantes: Estudiante[]): number {
  // TODO: implementar
  if (estudiantes.length === 0) return 0; /* si el array de estudiantes esta vacio, retorna 0. */
  const sumaPromedios = estudiantes.reduce(
    (acc, estudiante) => acc + calcularPromedio(estudiante),
    0
  ); /* reduce recorre el array de estudiantes y acumula la suma de los promedios de cada estudiante. El acumulador se inicializa en 0. Para cada estudiante, se calcula su promedio usando la funcion calcularPromedio y se suma al acumulador. */
  return Math.round((sumaPromedios / estudiantes.length) * 100) / 100; /* el promedio general se obtiene dividiendo la suma de los promedios entre la cantidad de estudiantes. Luego, se redondea a dos decimales usando el mismo metodo que en calcularPromedio. */
}
