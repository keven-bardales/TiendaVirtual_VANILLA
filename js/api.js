export const API = {
  BASE: 'https://apipw1.myferby.com/ws.php?',
  TK: 'tk=t308218823',
  URL: '',
}

API.URL = API.BASE + API.TK + '&op='

export const getCategorias = async () => {
  const response = await fetch(`${API.URL}categorias`)
  const datos = await response.json()
  const activas = datos.categorias.filter((categoria) => categoria.estado != 0)
  const promesas = await activas.map(async (categoria) => {
    const tieneProductos = await getProductosByCategoria(categoria.id)
    if (tieneProductos) return categoria
  })

  let categoriasConProducto = await Promise.all(promesas)

  categoriasConProducto = categoriasConProducto.filter(
    (tieneProducto) => tieneProducto
  )

  return categoriasConProducto
}

export const getProductosByCategoria = async (id) => {
  const funcion = `productos_categoria&cat=${id}`
  const response = await fetch(`${API.URL}${funcion}`)
  const datos = await response.json()

  if (!datos.productos) {
    return false
  }
  const arrayProductos = datos.productos.filter(
    (producto) => producto.estado != 0
  )

  return arrayProductos
}

export const validarUsuario = async ({ username, password }) => {
  const funcion = `login&username=${username}&password=${password}`
  const response = await fetch(`${API.URL}${funcion}`)
  return await response.json()
}

export const getChat = async (mensaje) => {
  const funcion = `buscar_palabra&palabras=${mensaje}`
  const response = await fetch(`${API.URL}${funcion}`)
  const data = await response.json()
  return data.chat[0]
}

export const sendCheckout = async ({
  cliente,
  direccion,
  tipo_pago,
  digitos,
  ccv,
  fecha,
  titular,
}) => {
  const funcion = `create_checkout&cliente=${cliente}&direccion=${direccion}&tipo_pago=${tipo_pago}&digitos=${digitos}&ccv=${ccv}&fecha=${fecha}&titular=${titular}`
  const response = await fetch(`${API.URL}${funcion}`)
  const data = await response.json()
}

export const registrarUsuario = async ({
  username,
  password,
  nombre,
  email,
}) => {
  const funcion = `create_usuario&username=${username}&password=${password}&nombre=${nombre}&email=${email}`
  const response = await fetch(`${API.URL}${funcion}`)
  const datos = await response.json()
  return datos
}
