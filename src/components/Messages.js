import React from 'react';
import { connect } from "react-redux";

function Messages(props) {
  if (props.messages.length) {
    const data = props.messages;
    data.sort(function (a, b) {
      return a.time - b.time;
    });
    console.log(data);
    const messages = data.map((el) => {
      return <li key={el.id}>
        {el.message}
      </li>
    });
    return (
      <ul className="Messages">
        {messages}
      </ul>
    );
  } else {
    return (
      'No messages'
    )
  }
}

const mapStateToProps = state => {
  const messages = state.messages.slice();
  return { messages };
};

export default connect(mapStateToProps)(Messages)
