import { Producto } from './Producto.js'

export const ListaProductos = (productos, catNombre) => {
  return `<section class="Lista" id="ListaProductos"> 
    ${productos.map((producto) => {
      producto['nombreCategoria'] = catNombre

      return Producto(producto)
    })}
    </section>`
}
