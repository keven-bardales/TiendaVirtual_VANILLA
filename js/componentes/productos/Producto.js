export const Producto = (producto) => {
  const productoString = JSON.stringify(producto)

  return `<div class="card producto" 
        data-productoId="${producto.id}">
        <h3>${producto.nombre}</h3>        
        <img src="${producto.imagen}"  ">
        <p><strong>Descripcion:</strong>${producto.descripcion}</p>
        <span><strong>Categoria:</strong>${producto.nombreCategoria}</span>
        <button data-producto='${productoString}'  class="btn_agregar_carrito" >Agregar Al Carrito</button>
        </div>`
}
