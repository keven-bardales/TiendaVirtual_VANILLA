import { Categoria } from './Categoria.js'

export const ListaCategorias = (categorias) => {
  return `<section class="Lista" id="ListaCategorias">
      <h2 class="titulo">Categorias</h2>
      ${categorias.map((categoria) => {
        return Categoria(categoria)
      })}</section>`
}
