import * as S from "../styles/home";
import ContainerRecent from "../src/components/Recent/index";
import CadastroPost from "../src/components/CreatePost";

export default function Home() {
  return (
    <S.Container>
      <CadastroPost />
      <ContainerRecent />
    </S.Container>
  );
}
