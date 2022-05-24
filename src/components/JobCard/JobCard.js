import React from "react"
import { Card,ContainerButtonGap } from "./styled"
import { convertDate } from '../../utils/convertDate';
import Button  from "@material-ui/core/button";


const JobCard = (props) => {
    return (
        <Card>
            <h3>{props.job.title}</h3>
            <p><b>Preço:</b> R${props.job.price.toFixed(2)}</p>
            <p><b>Prazo:</b> {convertDate(props.job.dueDate)}</p>
            <ContainerButtonGap>
            <Button variant="contained" onClick={() => props.goToDetailPage(props.job.id)}>Ver detalhes</Button>
            <Button variant="contained" onClick={() => props.addToCart(props.job)}>Adicionar no Carrinho</Button>
            </ContainerButtonGap>
        </Card>
    )
}

export default JobCard