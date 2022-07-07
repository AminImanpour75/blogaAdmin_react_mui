import axios from "axios";
export function ReadArticle(slug) {
  const token = window.localStorage.getItem("token");

  return new Promise((resolve, reject) => {
    axios({
      method: "get",
      url: "https://api.realworld.io/api/articles/" + slug,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => resolve(res.data.article))
      .catch((error) => reject(error));
  });
}
