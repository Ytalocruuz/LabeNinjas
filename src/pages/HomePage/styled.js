import styled from "styled-components"

export const HomePageContainer = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 180px;
    gap: 10px;

    button{
        color: white;
        background-color: #5D0F1F ;
    }

    button:hover{
        color: white;
        background-color: black;
    }

    h2{
        font-size: 40px
         ;
    }
`

export const ContainerButtonGap = styled.div`

    display: flex ;
    flex-direction: row ;
    justify-content: space-between ;
    gap: 10px;

`