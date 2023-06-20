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
        <input type="text" id="tipo_pago" name="tipo_pago" value="" required>
  
        <label for="digitos">Digitos:</label>
        <input type="text" id="digitos" name="digitos" maxlength="16" value="" required>
  
        <label for="cvv">CVV:</label>
        <input type="text" id="cvv" name="cvv" maxlength="3" value="" required>
        <input type="text" id="fechaVenc" maxlength="7" placeholder="MM/YYYY">

  
        <label for="titular">Titular:</label>
        <input type="text" id="titular" name="titular" value="" required>
  
        <input type="submit" value="Realizar Pago">
      </form>
    `
}
