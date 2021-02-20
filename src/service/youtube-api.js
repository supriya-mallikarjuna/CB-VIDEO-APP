import axios from "axios";

const KEY = "AIzaSyD6HP2ubSVYuOxLmwlTqx4P6VmR2Rtkp34";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
  },
});
