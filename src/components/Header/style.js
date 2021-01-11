import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;   
    background-color: #121620;
    justify-content: space-between;
    align-items: center;
    width: 100vw; 
    height: 100%;
    
`;

export const InnerRightContainer = styled.div`
    width: 25vw;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    h3{
        color: #b8b9bc;
        :hover{
            cursor: pointer;
        }
    }
`;

export const InnerLeftContainer = styled.div`
    width: 60vw;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    h2{
        color: purple;
        span{
            color: #a29e91;
        }
        :hover{
            cursor:pointer;
        }
    }
    input{
        font-size: 16px;
        width: 350px;
        height: 40px;
        background-color: #1c212e;
        color: #595d69;
        border: 0;
        border-radius: 5px;
    }
`;
export const Sandwich = styled.div`
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    .fa-bars{
        color: #b8b9bc;
        font-size: 20px;
        :hover{
            cursor: pointer;
        }
    }
`;