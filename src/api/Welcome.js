import axios from "axios";

export function Welcome() {
  const token = localStorage.getItem("token");
  if (!token) {
    window.location.href = "http://localhost:3000/login";
  }

  return new Promise((resolve, reject) => {
    axios({
      method: "get",
      url: "https://api.realworld.io/api/user/",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        resolve(response);
      })
      .catch((error) => reject(error));
  });
}
