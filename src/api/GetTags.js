import axios from "axios";
const responseFormatter = (arr) => {
  return arr.map((item) => {
    return { tag: item, selected: false };
  });
};

export function GetTags() {
  const token = window.localStorage.getItem("token");
  return new Promise((resolve, reject) => {
    axios({
      method: "get",
      url: "https://api.realworld.io/api/tags",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => resolve(responseFormatter(res.data.tags)))
      .catch((error) => reject(error));
  });
}
