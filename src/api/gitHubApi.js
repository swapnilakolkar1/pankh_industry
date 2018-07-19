import axios from "axios";

class GitHubApi {
  static getByUserName(userName) {
    return new Promise((resolve, reject) => {
      return axios
        .get("https://api.github.com/users/" + userName)
        .then(function(response) {
          console.log(response);
          return response.data;
        })
        .catch(function(error) {
          console.log(error);
        });
    });
  }
}
export default GitHubApi;
// }
// return axios.get(requestUrl).then(function (res) {
//     return res.data.playlist
//   }, function (err) {
//     alert('error');
//   });
