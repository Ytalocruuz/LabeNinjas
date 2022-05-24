import styled from "styled-components"

export const CreateJobContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top:  100px;

    select{
    background-color: white ;
    color: #5D0F1F;
    border-radius: 20px ;
    border: 1px solid red;
    font-size: 15px;
    padding-right: 20px;
    }

    input{
    background-color: white ;
    color: #5D0F1F;
    border-radius: 20px ;
    border: 1px solid red;
    font-size: 15px;
    padding-right: 20px;
    }

    button{
        color: white;
        background-color: #5D0F1F;
    }

    button:hover{
        color: white ;
        background-color: black;
    }
`