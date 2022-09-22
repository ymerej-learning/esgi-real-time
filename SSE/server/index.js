import http from 'http';

const server = http.createServer((request, response) => {
    response.writeHead(200, {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "text/event-stream",
        "Connection": "keep-alive",
        "Cache-Control": "no-cache"
    });

    setInterval(() => {
        response.write("event: custom\ndata: Hello\n\n")
    }, 1000);
});

server.listen(9000, "0.0.0.0");