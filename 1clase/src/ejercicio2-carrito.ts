/**
 * EJERCICIO 2: Carrito de Compras
 * ================================
 * Practica: interfaces, arrays, find, filter, map, reduce
 *
 * Completa cada función usando los tipos definidos.
 * NO modifiques las interfaces ni las firmas de las funciones.
 */

export interface Producto {
  id: number;
  nombre: string;
  precio: number;
  categoria: string;
}

export interface ItemCarrito {
  producto: Producto;
  cantidad: number;
}

export interface Carrito {
  items: ItemCarrito[];
}

// ─── FUNCIONES A COMPLETAR ────────────────────────────────────────────────────

/**
 * 2a. Agrega un producto al carrito.
 *     - Si el producto ya existe, incrementa su cantidad.
 *     - Si no existe, lo agrega con la cantidad indicada.
 *     - Retorna un NUEVO carrito (no mutes el original).
 */
export function agregarProducto(
  carrito: Carrito,
  producto: Producto,
  cantidad: number
): Carrito {
  // TODO: implementar
  const itemExistente = carrito.items.find((item) => item.producto.id === producto.id); /* find recorre el array de items del carrito y devuelve el primer elemento que cumpla con la condicion dada. En este caso, se busca un item cuyo producto tenga el mismo id que el producto que se quiere agregar. Si se encuentra, se guarda en la variable itemExistente. Si no se encuentra, itemExistente sera undefined. */
  if (itemExistente) {
    // Si el producto ya existe, incrementa su cantidad
    const itemsActualizados = carrito.items.map((item) =>
      item.producto.id === producto.id
        ? { ...item, cantidad: item.cantidad + cantidad } /* si el id del producto del item coincide con el id del producto que se quiere agregar, se crea un nuevo objeto item con las mismas propiedades pero con la cantidad incrementada. */
        : item /* si no coincide, se devuelve el item sin cambios. */
    );
    return { items: itemsActualizados }; /* se retorna un nuevo carrito con los items actualizados. */
  } else {
    // Si no existe, lo agrega con la cantidad indicada
    return { items: [...carrito.items, { producto, cantidad }] }; /* se retorna un nuevo carrito con los items existentes mas el nuevo item que se quiere agregar. */
  }
}

/**
 * 2b. Elimina completamente un producto del carrito por su id.
 *     Retorna un NUEVO carrito.
 */
export function eliminarProducto(carrito: Carrito, productoId: number): Carrito {
  // TODO: implementar
  throw new Error("No implementado");
}

/**
 * 2c. Calcula el total del carrito (suma de precio * cantidad de cada item).
 *     Retorna el valor redondeado a 2 decimales.
 */
export function calcularTotal(carrito: Carrito): number {
  // TODO: implementar
  throw new Error("No implementado");
}

/**
 * 2d. Retorna los nombres de los productos del carrito, en orden alfabético.
 *
 * Ejemplo:
 *   nombresOrdenados(carrito) => ["Banana", "Leche", "Pan"]
 */
export function nombresOrdenados(carrito: Carrito): string[] {
  // TODO: implementar
  throw new Error("No implementado");
}

/**
 * 2e. Filtra los items del carrito cuyo producto pertenece a la categoría dada.
 *     Retorna un NUEVO carrito solo con esos items.
 */
export function filtrarPorCategoria(
  carrito: Carrito,
  categoria: string
): Carrito {
  // TODO: implementar
  throw new Error("No implementado");
}
