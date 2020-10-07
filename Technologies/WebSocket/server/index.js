const WebSocket = require('ws');

const ws = new WebSocket.Server({
    port: 4100
}, () => {
    console.log('Web socket initialized');
});

/**
 *  Try this in CLIENT side console once the connection is initialized
 * const ws = new WebSocket('ws://localhost:4100');
 * ws.send('Hello Websocket');
 * ws.send(JSON.stringify({hi: 'Hello'}));
 */
