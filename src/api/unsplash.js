import axios from "axios";

export default axios.create({
  baseURL: '"https://api.unsplash.com',
  headers: {
    Authorization:
      "Client-ID 8096df397c58947e34a78c900fdc4a66c89ff676e09a954eb71f563b10ca2fe7",
  },
});
