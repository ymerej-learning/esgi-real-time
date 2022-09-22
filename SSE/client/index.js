const eventSource = new EventSource("http://localhost:9000");

eventSource.addEventListener("open", () => {
    console.log("Connection open event");
});

eventSource.addEventListener("error", (error) => {
    console.log("Connection error event : ", error);
});

eventSource.addEventListener("custom", (event) => {
    console.log("Connection custom event");
});