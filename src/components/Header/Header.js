import React from 'react'
import { HeaderContainer, ButtonHeader } from "./styled"
import Logo from "./../../img/Logo.png"
import Button from "@material-ui/core/Button"


const Header = (props) => {
    return (
        <HeaderContainer>
            <img src={Logo} alt="Logo Header" />
            <h2>LabeNinjas</h2>
            <ButtonHeader>
                <Button variant="contained" onClick={() => props.changePage("home")}>Home</Button>
                <Button variant="contained" onClick={() => props.changePage("cart")}>Carrinho</Button>
            </ButtonHeader>
        </HeaderContainer>
    )
}

export default Header
