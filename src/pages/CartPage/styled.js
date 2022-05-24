import styled from "styled-components"

export const ContainerInformButton = styled.div`
  display: flex ;
  flex-direction: column;
  align-items: center ;
  gap: 20px;

  button{
    border-radius: 5px;
    color: white;
    background-color: #5D0F1F;
    }

    button:hover{
    color: white ;
    background-color: black;
    }
  

`
export const CartValue = styled.div`
    font-size: 15px;

`

export const EmptyCart = styled.div`
    display: flex ;
    align-items: center ;
    text-align: center ;
    justify-content: center ;
    margin-top: 200px;
    font-size:  15px;
`