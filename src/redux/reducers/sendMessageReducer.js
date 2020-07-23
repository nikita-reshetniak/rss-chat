import { SEND_MESSAGE } from '../actions/actionTypes';

const initialState = '';

const sendMessageReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE: {
      console.log(action.payload);
      return action.payload;
    }
    default: {
      return state;
    }
  }
}

export default sendMessageReducer;