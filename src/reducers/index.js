import { combineReducers } from "redux";
import courses from "./coursesReducer";
import gitHub from "./gitHubReducer";
const rootReducer = combineReducers({
  courses
});
export default rootReducer;
