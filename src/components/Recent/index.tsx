import getPosts from "../../../pages/api/getPosts";
import { useEffect, useState } from "react";
import ContainerPost from "../layout/ContainerPost";
import * as S from "./styles";

const ContainerRecent: React.FC = () => {
  const [posts, setPosts] = useState<object>({});
  const [LastPost, setLastPost] = useState<object | string>('');

  async function filterLastPost() {
    const data = await getPosts();
    const lastPost = data[data.length - 1];
    setLastPost(lastPost);
  }
  useEffect(() => {
    filterLastPost();
    console.log("Log do useEffect");
  }, []);

  return (
    <S.Main>
      <ContainerPost title={LastPost?.title} text={LastPost?.text} />
    </S.Main>
 
  );
};

export default ContainerRecent;
