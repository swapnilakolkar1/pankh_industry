import * as ActionTypes from "../actionConstants/actionTypes";
const init = {
  title: ""
};
export default function courseReducer(state = [init], action) {
  debugger;
  switch (action.type) {
    case ActionTypes.CREATE_COURSE:
      return [...state, Object.assign({}, action.courses)];

    default:
      return state;
  }
}
