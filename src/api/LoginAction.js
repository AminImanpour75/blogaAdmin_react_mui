import axios from "axios";
export function LoginAction(email, password) {
  return new Promise((resolve, reject) => {
    axios({
      method: "post",
      url: "https://api.realworld.io/api/users/login/",
      data: {
        user: {
          email,
          password,
        },
      },
    })
      .then((response) => resolve(response))
      .catch((error) => reject(error));
  });
}
