import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;   
    background-color: black;
    width: 100vw; 
    height: 100%;
`;
export const Categories = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    color: white;
    height: 70px;
    h2:hover{
        cursor:pointer;
        color: wheat;
    }
`;
export const Input = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: center;
    input{
        height: 30px;
        margin-bottom: 10px;
        width: 300px;
    }
    .fas{
        color: white;
        font-size: 30px;
        margin-left: 10px;
    }
    .fas:hover{
        cursor: pointer;
        color: wheat;
    }
`;