import ContainerPost from "../layout/ContainerPost";
import getPosts from "../../../pages/api/getPosts";
import { useEffect, useState } from "react";
import * as S from "./styles";

const OldPost: React.FC = () => {
  const [posts, setPosts] = useState<Array<object>>([]);

  async function getOldPost() {
    const data = await getPosts();
    setPosts(data);
  }

  useEffect(() => {
    getOldPost();
    console.log(posts);
  }, []);

  return (
    <S.SectionPosts>
      {posts.map((post: any,index: number) => {
        return <ContainerPost key={index} title={post.title} text={post.text} />;
      })}
    </S.SectionPosts>
  );
};

export default OldPost;
