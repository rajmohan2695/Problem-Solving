const WebSocket = require('ws');

const webSocketServer = new WebSocket.Server({
    port: 4100
});

webSocketServer.on('connection', (webSocket) => {
    console.log('Connect Established');
    webSocket.send('Connection established');
    webSocket.on('message', (data) => {
        console.log(data);
        webSocket.send(JSON.stringify({Hello: "Hi"}));
    })
})

// Sending and receiving messages via socket in CLIENT side
/**
 * let wss4 = new WebSocket('ws://localhost:4100');
 * wss7.onmessage = event => { console.log(event) }
 * wss4.send(JSON.stringify({ Hi: "Hello" }));
 */
