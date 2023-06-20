import { PRODUCTOS_CARRITO } from '../../main.js'
import { ItemCarrito } from './ItemCarrito.js'

export const Carrito = () => {
  let totales
  let total
  if (PRODUCTOS_CARRITO.length > 0) {
    totales = PRODUCTOS_CARRITO.map(
      (producto) => producto.precio * producto.cantidad
    )

    total = totales.reduce((previous, next) => previous + next)
  }

  if (PRODUCTOS_CARRITO.length == 0) {
    return `<section class="CarritoSinProductos Lista" id="Carrito">
      <h1>No hay productos agregados al Carrito</h1>
      <button class="hide" id="limpiarCarrito">Vaciar Carrito</button> 
      
      <button class="eliminarProductoCarrito hide">Vaciar Carrito</button> 
      
      <button class="agregarCantidad hide" >Eliminar Producto</button>
      <button class="hide" id="showCheckout">CheckOut</button>
      </section>`
  }

  return `<section class="Lista" id="Carrito">
      ${PRODUCTOS_CARRITO.map((producto) => {
        return ItemCarrito(producto)
      })}
   ${total && `<h3 id='totalCarrito'>Total: L. ${total}</h3>`}
      <button id="limpiarCarrito">Vaciar Carrito</button>
      <button id="showCheckout">CheckOut</button>
      </section>`
}
