import axios from "axios";

export function editArticle(slug, body, title, description, tagList) {
  const token = window.localStorage.getItem("token");
  return new Promise((resolve, reject) => {
    axios({
      method: "put",
      url: "https://api.realworld.io/api/articles/" + slug,
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: {
        article: {
          body,
          description,
          title,
          tagList,
        },
      },
    })
      .then((res) => resolve(res.data))
      .catch((error) => reject(error));
  });
}
