import { ListaChats } from './ListaChats.js'

export const Chatbot = (display = 'none') => {
  return `
    <div id="chatbotModal" style="display: ${display};" class="modal">
      <div class="modal-content">
        <span class="close">&times;</span>
        <div id="Chatbot">
          ${ListaChats()}
          <form id="formChatbot">
            <div>
              <input id="chatBotMensaje" placeholder="Escribe..." required>
            </div>
            <div>
              <button id="btnEnviarMensaje" type="submit">Enviar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  `
}
