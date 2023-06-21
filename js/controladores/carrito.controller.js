import {
  Main,
  PRODUCTOS_CARRITO,
  vaciarArrCarrito,
  agregarCantProductoArray,
  elimProductoArray,
} from '../main.js'
import { cargarNavBar, LimpiarMain } from '../domFunciones.js'
import { Carrito } from '../componentes/carrito/Carrito.js'
import { mostrarCheckOut } from '../controladores/checkout.controller.js'

export const mostrarCarrito = () => {
  LimpiarMain()
  Main.innerHTML += Carrito()
  opcionesCarrito()
}

export const agregarCarrito = async (el) => {
  const producto = JSON.parse(el.dataset.producto)
  const POSICION_CARRITO = productoExisteCarrito(producto)
  if (POSICION_CARRITO != -1) {
    PRODUCTOS_CARRITO[POSICION_CARRITO]['cantidad'] += 1
    guardarCarrito()
    return
  }
  producto['cantidad'] = 1
  PRODUCTOS_CARRITO.push(producto)
  guardarCarrito()
}

export const guardarCarrito = () => {
  cargarNavBar()
  window.localStorage.setItem('carrito', JSON.stringify(PRODUCTOS_CARRITO))
}

export const limpiarCarrito = () => {
  window.localStorage.removeItem('carrito')
  vaciarArrCarrito()
  LimpiarMain()
  Main.innerHTML = Carrito()
  opcionesCarrito()
}

export const eliminarProductoCarrito = (el) => {
  const producto = JSON.parse(el.dataset.productoeliminar)
  elimProductoArray(producto)
  Main.innerHTML = Carrito()
  opcionesCarrito()
  cargarNavBar()
  localStorage.setItem('carrito', JSON.stringify(PRODUCTOS_CARRITO))
}

export const agregarCantidad = (el) => {
  const producto = JSON.parse(el.dataset.productoagregar)
  const operacion = el.dataset.operacion
  agregarCantProductoArray(producto, operacion)
  Main.innerHTML = Carrito()
  opcionesCarrito()
}

export const productoExisteCarrito = (producto) => {
  const index = PRODUCTOS_CARRITO.findIndex(
    (existente) => existente.id === producto.id
  )
  return index
}

export const BotonesAgregarCaritto = () => {
  const botonesAgregarCarrito = document.querySelectorAll(
    '.btn_agregar_carrito'
  )

  botonesAgregarCarrito.forEach((el) => {
    el.addEventListener('click', () => {
      agregarCarrito(el)
    })
  })
}

export const opcionesCarrito = () => {
  setTimeout(() => {
    const resetCarrito = document.getElementById('limpiarCarrito')
    resetCarrito.addEventListener('click', () => {
      limpiarCarrito()
    })

    const btnsEliminarProductoCarrito = document.querySelectorAll(
      '.eliminarProductoCarrito'
    )

    btnsEliminarProductoCarrito.forEach((btn) => {
      btn.addEventListener('click', () => {
        eliminarProductoCarrito(btn)
      })
    })

    const btnsagregarCantidadCarrito =
      document.querySelectorAll('.agregarCantidad')

    btnsagregarCantidadCarrito.forEach((btn) => {
      btn.addEventListener('click', () => {
        agregarCantidad(btn)
      })
    })

    const showCheckout = document.getElementById('showCheckout')

    showCheckout.addEventListener('click', () => {
      mostrarCheckOut()
    })
  }, 200)
}
