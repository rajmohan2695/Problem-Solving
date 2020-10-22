const textInput = document.getElementById('input1');
const sendBtn = document.getElementById('sendBtn');
const messages = document.getElementById('messages');
let socketConn =  new WebSocket('ws://localhost:4100');
sendBtn.disabled = true;

socketConn.onopen = () => {
    sendBtn.disabled = false;
}

socketConn.onclose = () => {
    sendBtn.disabled = true;
}

socketConn.onmessage = (event) => {
    const { data } = event;
    addMessage({ sender: 'Server', msg: data });
}

function addMessage(data) {
    const { sender, msg } = data;
    const newMessage = document.createElement('div');
    newMessage.innerText = `${sender} : ${msg}`;
    messages.appendChild(newMessage);
    messages.scrollTop = messages.scrollHeight;
}

sendBtn.addEventListener('click', () => {
    handleSendMessage(textInput.value);
})

textInput.onkeypress = (event) => {
    if(event.keyCode === 13) {
        handleSendMessage(textInput.value);
    }
}

function handleSendMessage(message) {
    addMessage({ sender: 'Client', msg: message });
    socketConn.send(message);
    textInput.value = "";
    textInput.focus();
}
