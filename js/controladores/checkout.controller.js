import { Main, USUARIO_ACTIVO } from '../main.js'
import { CheckOut } from '../componentes/carrito/Checkout.js'
import { opcionesCarrito } from './carrito.controller.js'
import { mostrarRegistrarse } from './login.controller.js'
import { sendCheckout } from '../api.js'
import { LimpiarMain } from '../domFunciones.js'

export const mostrarCheckOut = () => {
  if (USUARIO_ACTIVO) {
    LimpiarMain()
    Main.innerHTML += CheckOut()
    opcionesCheckOut()
  } else {
    const desdeCarrito = true
    mostrarRegistrarse(desdeCarrito)
  }
}

export const opcionesCheckOut = () => {
  setTimeout(() => {
    const formCheckout = document.querySelector('#formCheckout')
    formCheckout.addEventListener('submit', (e) => {
      e.preventDefault()
      console.log('first')
    })

    const fechaVenc = document.getElementById('fechaVenc')
    fechaVenc.addEventListener('input', (e) => {
      formatExpirationDate(fechaVenc)
    })
  }, 500)
}

export const crearCheckout = () => {
  const checkout = {
    cliente: USUARIO_ACTIVO.id,
    direccion: '',
    tipo_pago: '',
    digitos: '',
    ccv: '',
    fecha: '',
    titular: '',
  }
}

function formatExpirationDate(e) {
  let input = e.value

  // Remove any non-digit characters
  input = input.replace(/\D/g, '')

  // Format the input as MM/YYYY
  if (input.length > 2) {
    const month = input.substring(0, 2)
    const year = input.substring(2)

    input = `${month}/${year}`
  }

  // Update the input value
  e.value = input
}

// Add event listener for input blur (validation)

function validateExpirationDate(e) {
  console.log(e)
  const input = e.value
  const [month, year] = input.split('/')

  // Check if the input has a valid format and the month is within range
  if (/^(0[1-9]|1[0-2])\/\d{4}$/.test(input) && parseInt(month) <= 12) {
    // Valid expiration date
    e.classList.remove('error')
  } else {
    // Invalid expiration date
    e.classList.add('error')
  }
}
