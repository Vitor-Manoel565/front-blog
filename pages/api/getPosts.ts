import axios from "axios";

const getPosts = async () => {
  const {data} = await axios.get("http://localhost:5000/posts");
  try {
    return data;
  } catch (error) {
    return error;
  }
};

export default getPosts;
