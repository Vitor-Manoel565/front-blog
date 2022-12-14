import ContainerPost from "../layout/ContainerPost";
import getPosts from "../../../pages/api/getPosts";
import { useEffect, useState } from "react";
import * as S from "./styles";

const OldPost: React.FC = () => {
  const [posts, setPosts] = useState<Array<object> | null>(null);

  async function getOldPost() {
    const data = await getPosts();
    setPosts(data);
  }

  useEffect(() => {
    getOldPost();
  }, []);

  return (
    <S.SectionPosts>
      {posts?.map((post) => {
        return (
          <ContainerPost key={post?._id} title={post?.title} text={post?.text} />
        );
      })}
    </S.SectionPosts>
  );
};

export default OldPost;
