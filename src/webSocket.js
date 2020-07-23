const url = 'ws://chat.shas.tel';
const socket = new WebSocket(url);

socket.onopen = (event) => {
  console.log(event);
}

socket.onmessage = (event) => {
  console.log(event.data);
}

socket.onclose = function (event) {
  console.log(event);
}
