import styled from "styled-components"

export const Card = styled.div`
    border: 1px solid black;
    background-color: #5D0F1F;
    border-radius: 10px ;
    color: white ;
    margin: 12px;
    padding: 12px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    button{
    padding-top: 10px ;
    padding-bottom:10px;
    font-size: 15px ;
    border-radius: 5px;
    background-color: black ;
    color: white ;

   }

   button:hover{
       background-color: white ;
       color: black ;
   }
`