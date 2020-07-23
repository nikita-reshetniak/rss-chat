import React from 'react';
import { connect } from 'react-redux';
import { saveNickname } from '../redux/actions/actions';

class NickInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
    };
  }

  updateInput = input => {
    this.setState({ input });
  };

  handleSaveNick = () => {
    this.props.saveNickname(this.state.input);
    this.setState({ input: '' });
  };

  render() {
    return (
      <div className='input-wrapper'>
        <input
          onChange={e => this.updateInput(e.target.value)}
          value={this.state.input}
        />
        <button className="btn" onClick={this.handleSaveNick}>
          Save Nick
        </button>
      </div>
    );
  }
}

export default connect(
  null,
  { saveNickname }
)(NickInput);
