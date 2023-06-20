import { USUARIO_ACTIVO } from '../../main.js'
export const Sesion = () => {
  const usuario = USUARIO_ACTIVO
  return USUARIO_ACTIVO
    ? `
    <li><a id="iniciarSesion" data-sesion='logout' href="#">Cerrar Sesion <i class="fa-solid fa-user"></i></a></li>`
    : `
    <li><a id="iniciarSesion" data-sesion='login' href="#">Iniciar Sesion <i class="fa-solid fa-user"></i></a></li>`
}
