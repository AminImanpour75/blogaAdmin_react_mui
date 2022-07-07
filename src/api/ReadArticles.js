import axios from "axios";

export const readArticles = () => {
  const token = window.localStorage.getItem("token");
  return new Promise((resolve, reject) => {
    axios({
      method: "get",
      url: "https://api.realworld.io/api/articles",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => resolve(response.data.articles))
      .catch((error) => reject(error));
  });
};
