import { combineReducers } from 'redux';
import messageReducer from './messageReducer';
import saveNicknameReducer from './saveNicknameReducer';
import sendMessageReducer from './sendMessageReducer';

export default combineReducers({
  messages: messageReducer,
  nick: saveNicknameReducer,
  sendMessageReducer,
});
