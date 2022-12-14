import axios from "axios";

const CreatePost = async (title: string, text: string) => {
  const data = axios.post("http://localhost:5000/post", {
    title: title,
    text: text,
    date: new Date(),
  });
  try {
    return {
      message: true,
      data: data,
    };
  } catch (error) {
    return {
      message: false,
      data: error,
    };
  }
};

export default CreatePost;
