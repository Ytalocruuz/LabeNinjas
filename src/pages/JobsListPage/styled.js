import styled from "styled-components"

export const JobsListContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    margin: 12px;
`

export const FiltersContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 32px 24px 0 24px;

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

    
`