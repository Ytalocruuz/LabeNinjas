import styled from "styled-components"

export const HeaderContainer = styled.div`
    border: 1px solid #5D0F1F;
    background-color: white;
    padding-right: 10px ;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    img {
        width: 150px;
    }

    h2{
        font-size: 40px ;
        font-weight: bolder ;
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

export const ButtonHeader = styled.div`
    display: flex ;
    flex-direction: row ;
    justify-content: space-between;
    gap: 10px
    
`