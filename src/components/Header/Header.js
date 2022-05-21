import React from "react";
import { HeaderContainer, LogoHeade, OrganizationTitle} from "./styled";
import Logo from "./../../img/LogoNinja.png"
import { Button } from "@material-ui/core";

const Header = (props) =>  {
    return (
        <HeaderContainer>
            <OrganizationTitle>
            <LogoHeade  src={Logo} alt="Logo Labe Ninja"/>
            <h2>LabeNinjas</h2> 
            </OrganizationTitle>
        <div>
            <Button variant="contained" color="primary" onClick={ () => props.changePage("home")}>Home</Button>
            <Button variant="contained" color="primary" onClick={ () => props.changePage("cart")}>Carinho</Button>
        </div>
        </HeaderContainer>
    )
}

export default Header