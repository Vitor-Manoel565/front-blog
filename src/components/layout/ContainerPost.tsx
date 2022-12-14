import { useState } from "react";
import * as S from "./styles";
import { MdFavorite } from "react-icons/md";
import { AiFillStar } from "react-icons/ai";

interface ContainerPostProps {
  title: string;
  text: string;
}

const ContainerPost: React.FC<ContainerPostProps> = ({ title, text }) => {
  const [like, setLike] = useState(false);
  const [favorite, setFavorite] = useState(false);
  return (
    <S.Container>
      <S.Header>Post: {title}</S.Header>
      <S.ContainerText>
        <S.Text>{text}</S.Text>
      </S.ContainerText>
      <S.ContainerIcons>
        <MdFavorite
          {...(like ? { fill: "red" } : { fill: "white" })}
          size={30}
          onClick={() => setLike(!like)}
        />
        <AiFillStar
          {...(favorite ? { fill: "yellow" } : { fill: "white" })}
          size={30}
          onClick={() => setFavorite(!favorite)}
        />
      </S.ContainerIcons>
    </S.Container>
  );
};

export default ContainerPost;
