import { applyMiddleware, createStore } from "redux";
// import { createStore } from 'redux';
import thunk from "redux-thunk";
import rootReducer from "../reducers";
// import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
export default function configureStore(initialState) {
  return createStore(rootReducer, initialState, applyMiddleware(thunk));
}
