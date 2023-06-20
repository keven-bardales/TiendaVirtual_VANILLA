import { getCategorias, validarUsuario } from './api.js'
import { NavBar } from './dom.js'
import {
  opcionesLista,
  OpcionesInciales,
  cargarNavBar,
  LimpiarMain,
} from './domFunciones.js'
import { ListaCategorias } from './componentes/categorias/ListaCategorias.js'
import { productoExisteCarrito } from './controladores/carrito.controller.js'
import { mostrarCategorias } from './controladores/categorias.controller.js'
import { Chatbot } from './componentes/chatBot/ChatBot.js'

export const Body = document.querySelector('#root')
export const Header = document.getElementById('head')
export const divChatbot = document.getElementById('divChatbot')

export let PRODUCTOS_CARRITO = JSON.parse(localStorage.getItem('carrito')) || []

const credenciales = JSON.parse(localStorage.getItem('credenciales')) || ''

export var USUARIO_ACTIVO = await validarUsuario(credenciales)

export let CHATS_ACTUALES = []

divChatbot.innerHTML = Chatbot()

export const categorias = await getCategorias()

Header.innerHTML = NavBar()

setTimeout(() => {
  OpcionesInciales()
}, 100)

Body.innerHTML += `<main id="main">${ListaCategorias(categorias)}</main>`

export const Main = document.getElementById('main')

opcionesLista()

export const vaciarArrCarrito = () => {
  PRODUCTOS_CARRITO = []
  cargarNavBar()
}

export const elimProductoArray = (producto) => {
  PRODUCTOS_CARRITO = PRODUCTOS_CARRITO.filter((p) => p.id != producto.id)
}

export const agregarCantProductoArray = (producto, operacion) => {
  const POSICION_CARRITO = productoExisteCarrito(producto)
  let cantidad
  if (operacion == 'sumar') {
    PRODUCTOS_CARRITO[POSICION_CARRITO]['cantidad'] += 1
    cantidad = PRODUCTOS_CARRITO[POSICION_CARRITO]['cantidad']
  } else {
    PRODUCTOS_CARRITO[POSICION_CARRITO]['cantidad'] -= 1
    cantidad = PRODUCTOS_CARRITO[POSICION_CARRITO]['cantidad']
  }
  if (cantidad == 0) {
    elimProductoArray(producto)
    cargarNavBar()
  }
}

export function actualizarUsuarioActivo(user) {
  USUARIO_ACTIVO = user
}

export const cerrarSesion = () => {
  USUARIO_ACTIVO = undefined
  localStorage.removeItem('credenciales')
  cargarNavBar()
  LimpiarMain()
  mostrarCategorias()
}
