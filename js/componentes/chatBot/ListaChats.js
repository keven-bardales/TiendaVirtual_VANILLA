import { CHATS_ACTUALES } from '../../main.js'
import { Chat } from './Chat.js'

export const ListaChats = () => {
  return ` <div id="listaMensajes">
    ${CHATS_ACTUALES.map((chat) => {
      return Chat(chat)
    })}
      </div>`
}
