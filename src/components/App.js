import React from 'react';
import Messages from './Messages';
import NickInput from './NickInput';
import MessageInput from './MessageInput';
import '../notifications';
import '../styles/App.css';

function App() {
    return (
      <div className="App">
        <Messages />
        <NickInput />
        <MessageInput />
      </div>
    );
}

export default App;
