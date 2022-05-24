import styled from 'styled-components'

export const Card = styled.div`
    border: 1px solid black;
    background-color: #5D0F1F;
    color: white ;
    padding: 0 16px 16px 16px;
    margin: 12px;
    border-radius: 10px;

    button{
    
     background-color: black ;
     color: white ;
     border-radius: 5px ;
 
    }

    button:hover{
        background-color: white ;
        color: black ;
    }
    
`

export const ContainerButtonGap = styled.div`

    display: flex ;
    flex-direction: column ;
    justify-content: space-between ;
    gap: 10px;
`


