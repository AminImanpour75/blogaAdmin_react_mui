import axios from "axios";

export function CreateArticle(body, title, description, tagList) {
  return new Promise((resolve, reject) => {
    const token = window.localStorage.getItem("token");
    axios({
      method: "post",
      url: "https://api.realworld.io/api/articles",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: {
        article: {
          body,
          title,
          description,
          tagList,
        },
      },
    })
      .then((res) => resolve(res.data))
      .catch((error) => reject(error));
  });
}
