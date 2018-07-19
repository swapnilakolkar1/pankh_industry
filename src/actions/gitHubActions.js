import * as ActionTypes from "../actionConstants/actionTypes";
import axios from "axios";
import GitHubApi from "../api/gitHubApi";
export function fetchGitUser(gitdata) {
  return { type: ActionTypes.FETCH_GIT_USER, gitdata };
}

export function userNameChange(userName) {
  return { type: ActionTypes.ON_GIT_USER_NAME_CHANGE, userName };
}

export function fetchData(userName) {
  return function(dispatch) {
    return axios({
      url: "https://api.github.com/users/" + userName,
      timeout: 20000,
      method: "get",
      responseType: "json"
    })
      .then(function(response) {
        dispatch(fetchGitUser(response.data));
      })
      .catch(function(response) {});
  };
}
