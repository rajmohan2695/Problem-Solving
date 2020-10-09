const WebSocket = require('ws');
const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(path.resolve(__dirname, '../client')));
const server = app.listen(4100);

const webSocketServer = new WebSocket.Server({
    server,
    verifyClient: () => true,
});

webSocketServer.on('connection', (webSocket) => {
    webSocket.on('message', (data) => {
        webSocketServer.clients.forEach(socketCon => socketCon.send(data))
    })
})
