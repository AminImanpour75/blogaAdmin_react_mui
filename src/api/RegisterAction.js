import axios from "axios";

export default function RegisterAction(email, username, password) {
  return new Promise((resolve, reject) => {
    axios({
      method: "post",
      url: "https://api.realworld.io/api/users/",
      data: {
        user: {
          email,
          username,
          password,
        },
      },
    })
      .then((response) => resolve(response))
      .catch((error) => reject(error));
  });
}
