import { messages } from "../../data/messages.js";

const getAllMessages = () => {
    return messages
}

const createMessage = (text) => {
    const message =  {
        id: Date.now(),
        content: text,
    }

    messages.push(message)

    return message
}

export default {
    getAllMessages,
    createMessage,
}
