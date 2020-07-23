import { RECIEVE_MESSAGES } from "../actions/actionTypes";

const initialState = [];

const messageReducer = (state = initialState, action) => {
  switch (action.type) {
    case RECIEVE_MESSAGES: {
      return [...state, ...JSON.parse(action.payload)];
    }
    default: {
      return state;
    }
  }
}

export default messageReducer;