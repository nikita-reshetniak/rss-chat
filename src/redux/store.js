import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers'

const store = createStore(
  rootReducer,
);

// Every time the state changes, log it
// Note that subscribe() returns a function for unregistering the listener
const unsubscribe = store.subscribe(() => console.log(store.getState()))

export default store;
