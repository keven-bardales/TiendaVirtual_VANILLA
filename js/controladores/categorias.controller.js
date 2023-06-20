import { getProductosByCategoria } from '../api.js'
import { Main, categorias } from '../main.js'
import { LimpiarMain, opcionesLista } from '../domFunciones.js'
import { BotonesAgregarCaritto } from './carrito.controller.js'
import { ListaCategorias } from '../componentes/categorias/ListaCategorias.js'
import { ListaProductos } from '../componentes/productos/ListaProductos.js'

export const mostrarProductoByCategoria = async (el) => {
  const categoria = JSON.parse(el.dataset.categoria)
  const productos = await getProductosByCategoria(categoria.id)
  LimpiarMain()
  Main.innerHTML += ListaProductos(productos, categoria.nombre)
  BotonesAgregarCaritto()
}

export const mostrarCategorias = () => {
  Main.innerHTML = `${ListaCategorias(categorias)}`
  opcionesLista()
}
