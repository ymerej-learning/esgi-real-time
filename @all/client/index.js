import { io } from "socket.io-client"

const messageForm = document.getElementById("message")

if (!messageForm) {
    throw new Error("Message form not found")
}

const socket = io("ws://localhost:9000")

socket.on("message", message => {
    const messagesContainer = document.getElementById("messages")

    if (!messagesContainer) {
        throw new Error("Messages container not found")
    }

    const messageParagraph = document.createElement("p")

    messageParagraph.innerText = `[#${message.identifier}] ${message.content}`

    messagesContainer.appendChild(messageParagraph)
})

messageForm.addEventListener("submit", event => {
    const contentInput = event.target.content
    const messagesContainer = document.getElementById("messages")

    if (!contentInput) {
        throw new Error("Content input not found")
    }
    
    if (!messagesContainer) {
        throw new Error("Messages container not found")
    }

    const content = contentInput.value
    const messageParagraph = document.createElement("p")

    messageParagraph.innerText = `[#${socket.id}] ${content}`

    messagesContainer.appendChild(messageParagraph)

    socket.emit("message", content)

    event.preventDefault()
})