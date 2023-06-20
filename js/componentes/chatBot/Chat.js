export const Chat = ({ respuesta, mensajeUsuario }) => {
  return `
    <div class="respuestaMensaje">  
    <div class="divMensaje">
    <p class="mensajeUsuario">${mensajeUsuario}</p></div>
    <div class="divRespuesta">
    <p class="respuestaChatBot">${respuesta}</p></div>
    </div>
    `
}
