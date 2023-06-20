import { CHATS_ACTUALES, Main, divChatbot } from '../main.js'
import { getChat } from '../api.js'
import { Chatbot } from '../componentes/chatBot/ChatBot.js'

export const enviarChat = async (mensaje) => {
  const chat = await getChat(mensaje)
  console.log(chat)
  chat['mensajeUsuario'] = mensaje
  CHATS_ACTUALES.push(chat)
  mostrarMensajes()
}

export const mostrarMensajes = () => {
  divChatbot.innerHTML = Chatbot('block')
  opcionesChat()
}

export const opcionesChat = () => {
  setTimeout(() => {
    const btnEnviarMensaje = document.getElementById('btnEnviarMensaje')
    btnEnviarMensaje.addEventListener('click', (e) => {
      const chatBotMensaje = document.getElementById('chatBotMensaje')
      e.preventDefault()
      enviarChat(chatBotMensaje.value)
    })

    const chatbotModal = document.getElementById('chatbotModal')
    const closeChatbot = document.getElementsByClassName('close')[0]

    closeChatbot.addEventListener('click', () => {
      chatbotModal.style.display = 'none'
    })

    window.addEventListener('click', (event) => {
      if (event.target === chatbotModal) {
        chatbotModal.style.display = 'none'
      }
    })
  }, 200)
}
