import store from './redux/store';
import { recieveMessages } from './redux/actions/actions';

const url = 'ws://chat.shas.tel';
class Socket {
  constructor(url, store) {
    this.url = url;
    this.store = store;
    this.connection = this.connect();
  }

  connect = () => {
    const conn = new WebSocket(this.url);
    
    conn.onopen = (event) => {
      console.log(event.type);
    }

    conn.onmessage = (event) => {
      store.dispatch(recieveMessages(event.data))
    }

    conn.onclose = (event) => {
      console.log(event.type);
      this.connection = this.connect();
    }

    return conn;
  };
}

const socket = new Socket(url);

export default socket;
