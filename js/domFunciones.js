import { NavBar } from './dom.js'
import { Main, Header } from './main.js'
import { CheckOut } from './componentes/carrito/Checkout.js'
import {
  mostrarMensajes,
  opcionesChat,
} from './controladores/chatbot.controller.js'
import { mostrarLogin } from './controladores/login.controller.js'
import { mostrarCarrito } from './controladores/carrito.controller.js'
import {
  mostrarProductoByCategoria,
  mostrarCategorias,
} from './controladores/categorias.controller.js'

export const LimpiarMain = () => {
  Main.innerHTML = ''
}

export const limpiarHeader = () => {
  Header.innerHTML = ``
}

export const cargarNavBar = () => {
  Header.innerHTML = ''
  Header.innerHTML += NavBar()
  setTimeout(() => {
    OpcionesInciales()
  }, 100)
}

export const toggleMenuMobile = () => {
  const mobileMenu = document.getElementById('mobileMenu')
  mobileMenu.classList.toggle('hide')
}

export const ocultarMenuMobile = () => {
  const mobileMenu = document.getElementById('mobileMenu')
  mobileMenu.classList.add('hide')
}

/**OPCIONES */
export const opcionesLista = () => {
  setTimeout(() => {
    const lista = document.querySelectorAll('#ListaCategorias > div')

    lista.forEach((el) => {
      el.addEventListener('click', () => {
        mostrarProductoByCategoria(el)
      })
    })
  }, 500)
}

export const OpcionesInciales = () => {
  const btnMostrarCarrito = document.getElementById('btnMostrarCarrito')
  btnMostrarCarrito.addEventListener('click', () => {
    mostrarCarrito()
    ocultarMenuMobile()
  })
  const btnCategorias = document.getElementById('btnCategorias')
  btnCategorias.addEventListener('click', () => {
    mostrarCategorias()
    ocultarMenuMobile()
  })
  const btnIniciarSesion = document.getElementById('iniciarSesion')
  btnIniciarSesion.addEventListener('click', () => {
    mostrarLogin(btnIniciarSesion)
    ocultarMenuMobile()
  })

  const btnChatbot = document.getElementById('btnChatbot')
  btnChatbot.addEventListener('click', () => {
    const chatbotModal = document.getElementById('chatbotModal')
    chatbotModal.style.display = 'block'
    opcionesChat()
  })

  const btnMobileCarrito = document.getElementById('btnMobileCarrito')

  btnMobileCarrito.addEventListener('click', () => {
    mostrarCarrito()
    ocultarMenuMobile()
  })

  const btnCategoriasMobile = document.getElementById('btnCategoriasMobile')

  btnCategoriasMobile.addEventListener('click', () => {
    mostrarCategorias()
    ocultarMenuMobile()
  })

  const btnSesionMobile = document.getElementById('btnSesionMobile')

  btnSesionMobile.addEventListener('click', () => {
    mostrarLogin(btnSesionMobile)
    ocultarMenuMobile()
  })

  const btn_menu_Mobile = document.getElementById('btn_menu_Mobile')

  btn_menu_Mobile.addEventListener('click', () => {
    toggleMenuMobile()
  })

  document.addEventListener('click', (event) => {
    const mobileMenu = document.getElementById('mobileMenu')
    const btnMob = document.getElementById('btn_menu_Mobile')
    if (event.target !== mobileMenu && event.target !== btnMob) {
      ocultarMenuMobile()
    }
  })
}
