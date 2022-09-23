import { Server } from "socket.io"

const io = new Server(9000, {
    cors: {
        origin: "http://localhost:8000"
    }
})

io.on("connection", socket => {
    socket.on("message", message => {
        socket.broadcast.emit("message", {
            content: message,
            identifier: socket.id
        })
    })
})