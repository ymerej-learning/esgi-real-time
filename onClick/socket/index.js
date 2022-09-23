import { Server } from "socket.io"

const io = new Server(9000, {
    cors: {
        origin: "http://localhost:8000"
    }
})

io.on("connection", socket => {
    socket.on("addition", ({x, y}) => {
        socket.emit("result", {x, y, result: x + y})
    })
})