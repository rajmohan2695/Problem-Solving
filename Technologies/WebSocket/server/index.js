const WebSocket = require('ws');

const webSocketServer = new WebSocket.Server({
    port: 4100
});

const ports = [];
webSocketServer.on('connection', (webSocket) => {
    ports.push(webSocket);
    webSocket.on('message', (data) => {
        ports.forEach(socketCon => socketCon.send(data))
    })
})
