import { io } from "socket.io-client"

const additionForm = document.getElementById("addition")
const resultParagraph = document.getElementById("result")

if (!additionForm) {
    throw new Error("Send button not found")
}

if (!resultParagraph) {
    throw new Error("Result paragraph not found")
}

const socket = io("ws://localhost:9000")

socket.on("result", data => {
    resultParagraph.innerText = `Result of ${data.x} + ${data.y} is ${data.result}`
})

additionForm.addEventListener("submit", event => {
    const firstInput = additionForm.x
    const secondInput = additionForm.y

    if (!firstInput) {
        throw new Error("First input not found")
    }

    if (!secondInput) {
        throw new Error("Second input not found")
    }

    const x = Number(firstInput.value) || 0
    const y = Number(secondInput.value) || 0

    socket.emit("addition", {x, y})

    event.preventDefault()
})