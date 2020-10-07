const WebSocket = require('ws');

const ws = new WebSocket.Server({
    port: 4100
});

console.log('Websocket initialized at 4100');
