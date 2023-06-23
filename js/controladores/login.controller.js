import {
  Main,
  Header,
  actualizarUsuarioActivo,
  cerrarSesion,
  USUARIO_ACTIVO,
} from '../main.js'
import { cargarNavBar, LimpiarMain } from '../domFunciones.js'
import { validarUsuario, registrarUsuario } from '../api.js'
import { InicioSesion } from '../componentes/usuario/InicioSesion.js'
import { mostrarCategorias } from './categorias.controller.js'
import { Registrarse } from '../componentes/usuario/Registrarse.js'

export const cargarOpLogin = () => {
  setTimeout(() => {
    const loginForm = document.querySelector('#loginForm')
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault()
      const [username, password] = loginForm
      const credenciales = {
        username: username.value,
        password: password.value,
      }
      confirmarLogin(credenciales)
    })
    const btnRegistrarse = document.getElementById('btnRegistrarse')
    btnRegistrarse.addEventListener('click', () => {
      mostrarRegistrarse()
    })
  }, 400)
}

export const mostrarLogin = (el) => {
  const sesion = el.dataset.sesion

  if (sesion == 'none') {
    return
  }
  if (sesion == 'login') {
    LimpiarMain()
    Main.innerHTML = InicioSesion()
    cargarOpLogin()
    return
  }
  cerrarSesion()
}

export const confirmarLogin = async (credenciales) => {
  const usuario = await validarUsuario(credenciales)
  console.log(usuario)
  if (usuario) {
    window.localStorage.setItem('credenciales', JSON.stringify(credenciales))
    Header.innerHTML = ''
    actualizarUsuarioActivo(usuario)
    LimpiarMain()
    mostrarCategorias()
    cargarNavBar()
  }
}

export const cargarOpRegistrarse = async () => {
  const btnInicioSesion = document.getElementById('btnInicioSesion')
  btnInicioSesion.addEventListener('click', () => {
    mostrarLogin(btnInicioSesion)
  })

  const registrationForm = document.getElementById('registrationForm')
  registrationForm.addEventListener('submit', async (e) => {
    e.preventDefault()
    const [username, password, nombre, email] = registrationForm
    const user = {
      username: username.value,
      password: password.value,
      nombre: nombre.value,
      email: email.value,
      cargo: 3,
    }
    const userRegistrado = await registrarUsuario(user)
    if (userRegistrado) {
      actualizarUsuarioActivo(userRegistrado)
      registrationForm.reset()
    }
    confirmarRegistro()
  })
}

export const mostrarRegistrarse = (desdeCarrito = false) => {
  LimpiarMain()
  Main.innerHTML = Registrarse(desdeCarrito)
  cargarOpRegistrarse()
}

export const confirmarRegistro = () => {
  if (USUARIO_ACTIVO) {
    LimpiarMain()
    mostrarCategorias()
    cargarNavBar()
  } else {
    console.log('no se registro')
  }
}
