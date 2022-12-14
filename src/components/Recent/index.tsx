import getPosts from "../../../pages/api/getPosts";
import { useEffect, useState } from "react";
import ContainerPost from "../layout/ContainerPost";
import * as S from "./styles";

const ContainerRecent: React.FC = () => {
  const [posts, setPosts] = useState<object>({});
  const [LastPost, setLastPost] = useState<object | string>('');
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  async function filterLastPost() {
    const data = await getPosts();
    const lastPost = data[data.length - 1];
    setLastPost(lastPost);
    setTitle(lastPost.title);
    setText(lastPost.text);
  }
  useEffect(() => {
    filterLastPost();
    console.log("Log do useEffect");
  }, []);

  return (
    <S.Main>
      <ContainerPost title={title} text={text} />
    </S.Main>
 
  );
};

export default ContainerRecent;
