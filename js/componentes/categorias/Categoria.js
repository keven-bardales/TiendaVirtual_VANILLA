export const Categoria = (categoria) => {
  const categoriaString = JSON.stringify(categoria)
  return `<div class="card"  
  data-categoria='${categoriaString}'>
  <div class="card_item card_img">  
  <img src="${categoria.imagen}"  alt="${categoria.nombre}">
  </div>
  
  <h3 class="titulo">${categoria.nombre}</h3>
  </div>`
}
