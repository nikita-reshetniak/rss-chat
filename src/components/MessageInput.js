import React from 'react';
import { connect } from 'react-redux';
import { sendMessage } from '../redux/actions/actions';
import socket from '../socket';

class MessageInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
    };
  }

  updateInput = input => {
    this.setState({ input });
  };

  handleSendMsg = () => {
    console.log(this.props);
    this.props.sendMessage(this.state.input);
    socket.connection.send(JSON.stringify({
      from: this.props.nick,
      message: this.state.input,
    }));
    this.setState({ input: '' });
  };

  render() {
    return (
      <div className='input-wrapper'>
        <input
          onChange={e => this.updateInput(e.target.value)}
          value={this.state.input}
        />
        <button className="btn" onClick={this.handleSendMsg}>
          Send
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {nick: state.nick};
};

export default connect(
  mapStateToProps,
  { sendMessage }
)(MessageInput);
