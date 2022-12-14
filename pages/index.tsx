import * as S from "../styles/home";
import ContainerRecent from "../src/components/Recent/index";
import CadastroPost from "../src/components/CreatePost";
import { useState } from "react";
import OldPost from "../src/components/oldPost";

export default function Home() {
  return (
    <S.Container>
      <CadastroPost />
      <ContainerRecent />
      <OldPost />
    </S.Container>
  );
}
