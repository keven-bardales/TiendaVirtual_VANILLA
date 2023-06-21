import { PRODUCTOS_CARRITO, USUARIO_ACTIVO } from './main.js'
import { Sesion } from './componentes/usuario/Sesion.js'
import { Usuario } from './componentes/usuario/Usuario.js'

export function NavBar() {
  const primerNombre = USUARIO_ACTIVO ? USUARIO_ACTIVO.nombre.split(' ')[0] : ''
  const opcionLogin = USUARIO_ACTIVO ? 'none' : 'login'

  return `<nav class="navbar">
    <ul class="mobileMenu"> 
    <li><a  href="#"><i id="btn_menu_Mobile" class="fa-solid fa-bars"></i></a> 
    <a id="btnCategorias" href="#"><i class="fa-solid fa-house"></i></a>
    </li>
      <li>
      <a id="btnSesionMobile" data-sesion="${opcionLogin}" href="#"><i class="fa-solid fa-user"></i> ${
    primerNombre && primerNombre
  }
      <a id="btnMostrarCarrito" href="#"><i class="fa-solid fa-cart-shopping"></i> ${
        PRODUCTOS_CARRITO == 0 ? '' : PRODUCTOS_CARRITO.length
      }</a></li>
    </ul>
    <ul class="desktopMenu hide" id="mobileMenu"> 
      
    ${Usuario()}
      <li><a id="btnCategoriasMobile" href="#">Inicio</a></li>
      <li><a id="btnMobileCarrito" href="#">Carrito <i class="fa-solid fa-cart-shopping"></i> ${
        PRODUCTOS_CARRITO == 0 ? '' : PRODUCTOS_CARRITO.length
      }</a></li>  
      ${Sesion()} 
    </ul>  
  </nav>`
}

/**
 * 
      <li><a id="btnChatbot" href="#"">Chatbot</a></li>   
 */
