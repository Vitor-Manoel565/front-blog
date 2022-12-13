import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;
    gap: 1rem;
    background-color: gray;
    padding: 10px;
    overflow-y: auto;
    overflow-x: hidden;
`;

export const InputTitlePost = styled.input`
    width: 100%;
    height: 50px;
    border: none;
    border-radius: 5px;
    padding: 10px;
    font-size: 1.5rem;
    font-weight: 500;
    color: #000;
    background-color: #fff;
    outline: none;
`;

export  const TextAreaPost = styled.textarea`
    width: 100%;
    height: 400px;
    border: none;
    border-radius: 5px;
    padding: 10px;
    font-size: 1.5rem;
    font-weight: 500;
    color: #000;
    background-color: #fff;
    outline: none;
`;

export const ButtonPost = styled.button`
    width: 100%;
    height: 50px;
    border: none;
    border-radius: 5px;
    padding: 10px;
    font-size: 1.5rem;
    font-weight: 500;
    color: #fff;
    background-color: #000;
    outline: none;
    cursor: pointer;
`;

