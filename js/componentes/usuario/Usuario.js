import { USUARIO_ACTIVO } from '../../main.js'
export function Usuario() {
  const usuario = USUARIO_ACTIVO
  if (usuario) {
    return `<div class="loginDiv">${usuario.nombre}</div>`
  }
  return ''
}
