import { TIPOS_PAGO } from '../../main.js'
import TiposPago from './TiposPago.js'
import MensajesFormulario from '../mensajes/MensajesFormulario.js'
export const CheckOut = (
  cliente,
  direccion,
  tipo_pago,
  digitos,
  cvv,
  fecha,
  titular
) => {
  return `
      <form id="formCheckout">
        <label for="direccion">Dirección:</label>
        <input type="text" id="direccion" name="direccion" value="" required>
  
        <label for="tipo_pago">Tipo de Pago:</label>
        <select type="text" id="tipo_pago" name="tipo_pago" value="" required>
        ${TIPOS_PAGO.map((tipoPago) => {
          return TiposPago(tipoPago)
        })}
        </select>
        <div id="opcionesTarjeta" style="display: none;">
        
        <label for="digitos">Digitos:</label>
        <input type="text" id="digitos" name="digitos" maxlength="16" value="" required>
  
        <label for="cvv">CVV:</label>
        <input type="text" id="cvv" name="cvv" maxlength="3" value="" required>
        <input type="text" id="fechaVenc" name="fecha" maxlength="7" placeholder="MM/YYYY">

  
        <label for="titular">Titular:</label>
        <input type="text" id="titular" name="titular" value="" required>
        </div>
  
        <input type="submit" value="Realizar Pago">
        ${MensajesFormulario('formCheckout')}
      </form>
    `
}
