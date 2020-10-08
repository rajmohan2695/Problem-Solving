const WebSocket = require('ws');

const webSocketServer = new WebSocket.Server({
    port: 4100
});

webSocketServer.on('connection', (webSocket) => {
    webSocket.on('message', (data) => {
        webSocketServer.clients.forEach(socketCon => socketCon.send(data))
    })
})
