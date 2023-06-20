export const ItemCarrito = (producto) => {
  const productoString = JSON.stringify(producto)
  return `<article class="itemCarrito">

  <div class="grupo carrito">
  <img src="${producto.imagen}"></img> 
  <h3><span>${producto.nombre}</span></h3> 
  <h3><span>L.${producto.precio}</span></h3>
  <h3><span>${producto.nombreCategoria}</span></h3>
  </div>
    
  <div class="grupo carrito btns">
  <button class="agregarCantidad" data-operacion="restar" data-productoagregar='${productoString}'>-</button>
  <span>${producto.cantidad}</span>  
  <button class="agregarCantidad" data-productoagregar='${productoString}' data-operacion="sumar"'>+</button>
  
  <button class="eliminarProductoCarrito" data-productoeliminar='${productoString}'>Eliminar</button>
  </div>     
    
    </article>`
}
