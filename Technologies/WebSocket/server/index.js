const WebSocket = require('ws');
const express = require('express');
const path = require('path');
const app = express();
app.use('/', express.static(path.resolve(__dirname, '../client')));
const server = app.listen(4100);

const webSocketServer = new WebSocket.Server({
    server,
});

webSocketServer.on('connection', (webSocket) => {
    webSocket.on('message', (data) => {
        webSocketServer.clients.forEach(socketCon => socketCon.send(data))
    })
})

server.on('upgrade', async function upgrade(request, socket, head) {
    let mm = Math.random();
    console.log(mm)
    if(mm > 0.5){
        return socket.end('HTTP/1.1 401 Unauthorized\r\n', 'ascii')
    }

    webSocketServer.handleUpgrade(request, socket, head, (ws) => {
        webSocketServer.emit('connection', ws, request, ...args)
    })
})
