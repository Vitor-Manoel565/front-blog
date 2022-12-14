import { useState } from "react";
import * as S from "./styles";
import CreatePost from "../../../pages/api/ceatePosts";

const CadastroPost: React.FC = () => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  console.log("titulo:" + title, "texto:" + text);
  function handleCreatePost() {
    CreatePost(title, text);

    console.log("Log do envio, titulo:" + title, "texto:" + text);
  }

  return (
    <S.ContainerForm>
      <S.Container>
        <S.InputTitlePost
          placeholder="Título do post"
          type="text"
          onChange={(e) => setTitle(e.target.value)}
        />
        <S.TextAreaPost
          placeholder="Escreva seu post aqui"
          onChange={(e) => setText(e.target.value)}
        />
        <S.ButtonPost onClick={() => handleCreatePost()}>Postar</S.ButtonPost>
      </S.Container>
    </S.ContainerForm>
  );
};

export default CadastroPost;
