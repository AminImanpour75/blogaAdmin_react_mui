import axios from "axios";
export function deleteArticle(slug) {
  const token = window.localStorage.getItem("token");
  return new Promise((resolve, reject) => {
    axios({
      method: "DELETE",
      url: "https://api.realworld.io/api/articles/" + slug,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => resolve(res))
      .catch((error) => reject(error));
  });
}
