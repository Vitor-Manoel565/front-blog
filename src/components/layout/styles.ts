import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  background-color: white;
  padding: 10px;
`;

export const Header = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 10%;
  padding: 15px;
  background-color: black;
  color: white;
  font-size: 2rem;
  border-radius: 15px;
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: 500;
  color: white;
`;

export const ContainerText = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 10px;
`;

export const Text = styled.p`
  font-size: 2.5rem;
  font-weight: 500;
  color: black;
  margin: 0;
  padding: 0;
`;

export const ContainerIcons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 1rem;
  padding: 15px;
  background-color: black;
  color: white;
  font-size: 2rem;
  border-radius: 15px;
`;
