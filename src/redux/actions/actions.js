import { RECIEVE_MESSAGES } from '../actions/actionTypes';
import { SAVE_NICKNAME } from '../actions/actionTypes';
import { SEND_MESSAGE } from '../actions/actionTypes';

export const recieveMessages = messages => ({
  type: RECIEVE_MESSAGES,
  payload: messages,
});

export const saveNickname = nick => ({
  type: SAVE_NICKNAME,
  payload: nick,
});

export const sendMessage = message => ({
  type: SEND_MESSAGE,
  payload: message,
});
