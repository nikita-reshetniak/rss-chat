import { SAVE_NICKNAME } from '../actions/actionTypes';

const initialState = (localStorage.getItem('nick')) ? localStorage.getItem('nick') : 'user';

const saveNicknameReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_NICKNAME: {
      console.log(action.payload);
      if(action.payload) {
        localStorage.setItem('nick', action.payload);
        return action.payload;
      } else {
        return state;
      }
    }
    default: {
      return state;
    }
  }
}

export default saveNicknameReducer;