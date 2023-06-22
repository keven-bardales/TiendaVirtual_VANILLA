export const TiposPago = ({ id, nombrePago }) => {
  return `
        <option value=${id}>${nombrePago}</option>
    `
}

export default TiposPago
