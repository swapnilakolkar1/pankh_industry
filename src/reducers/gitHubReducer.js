import * as ActionTypes from "../actionConstants/actionTypes";
import dummy from "../resources/img/dummy-user-img.png";
import GitHubApi from "../api/gitHubApi";
let initState = {
  userName: " ",
  userImg: dummy,
  fullname: "",
  bio: "",
  html_url: "",
  Company: "",
  location: ""
};
export default function gitHubReducer(state = initState, action) {
  switch (action.type) {
    case ActionTypes.FETCH_GIT_USER: {
      let data = action.gitdata;
      let newState = state;
      newState = Object.assign({}, newState, {
        userName: data.userName,
        userImg: data.avatar_url,
        fullname: data.fullname,
        bio: data.bio,
        html_url: data.html_url,
        Company: data.company,
        location: data.location
      });
      return newState;
    }

    case ActionTypes.ON_GIT_USER_NAME_CHANGE: {
      console.log("name change");
      let username = action.userName;
      let newState = state;
      newState = Object.assign({}, newState, {
        userName: username
      });
      return newState;
    }

    default:
      return state;
  }
}
