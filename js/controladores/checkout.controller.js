import { Main, USUARIO_ACTIVO, mostrarNotificacion } from '../main.js'
import { CheckOut } from '../componentes/carrito/Checkout.js'
import { opcionesCarrito } from './carrito.controller.js'
import MensajesFormulario from '../componentes/mensajes/MensajesFormulario.js'
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
    const btnSubmit = document.querySelector(
      '#formCheckout input[type="submit"]'
    )

    let formularioValidado = false

    const formCheckout = document.querySelector('#formCheckout')
    formCheckout.addEventListener('submit', (e) => {
      console.log(btnSubmit)
      e.preventDefault()
      crearCheckout(formCheckout)
    })

    const fechaVenc = document.getElementById('fechaVenc')
    fechaVenc.addEventListener('input', (e) => {
      formatearFecha(fechaVenc)
    })

    formCheckout['tipo_pago'].addEventListener('change', () => {
      OcultarOpcionesTarjeta(formCheckout['tipo_pago'].value)
    })

    formCheckout['digitos'].addEventListener('input', () => {
      const value = formCheckout['digitos'].value
      validarTipoTarjeta(value) == false
        ? (formularioValidado = false)
        : (formularioValidado = true)
      mostrarMensajeTarjeta(value)
    })

    /**opcionesTarjeta */
  }, 500)
}

export const crearCheckout = async (formCheckout) => {
  const { direccion, tipo_pago, digitos, cvv, fecha, titular } = formCheckout
  const checkout = {
    cliente: USUARIO_ACTIVO.id,
    direccion: direccion.value,
    tipo_pago: tipo_pago.value,
    digitos: digitos.value,
    cvv: cvv.value,
    fecha: fecha.value,
    titular: titular.value,
  }
  console.log(checkout)
  const response = await sendCheckout(checkout)
  if (response) {
    console.log(response)
    mostrarNotificacion('Checkout Creado Con exito')
    formCheckout.reset()
  }
}

function formatearFecha(e) {
  let input = e.value

  input = input.replace(/\D/g, '')

  if (input.length > 2) {
    const month = input.substring(0, 2)
    const year = input.substring(2)

    input = `${month}/${year}`
  }

  e.value = input
}

const OcultarOpcionesTarjeta = (inputValue) => {
  if (inputValue == 2) {
    document.querySelector('#opcionesTarjeta').style.display = 'block'
  } else {
    document.querySelector('#opcionesTarjeta').style.display = 'none'
  }
}

const mostrarMensajeTarjeta = (value) => {
  const divMensaje = document.querySelector('.mensajeForm.formCheckout')
  if (value == '') {
    divMensaje.style.display = 'none'
    return
  }
  if (validarTipoTarjeta(value) == false) {
    divMensaje.innerHTML = 'Solo se aceptan Tarjetas Visa o Mastercard'
    divMensaje.classList.add('invalido')
    divMensaje.style.display = 'block'
  } else {
    divMensaje.style.display = 'none'
  }
}

const validarTipoTarjeta = (inputValue) => {
  const primerNumero = inputValue[0]
  if (primerNumero == 4 || primerNumero == 5) {
    return true
  } else {
    console.log('no aceptada')
    return false
  }
}
