import React from "react";
import Logo from "../../img/Logo.png"
import {ContinerFooter} from "./style"


class Fopter extends React.Component{
    render(){
        return(
            <ContinerFooter>
                <img src={Logo} alt="Logo Footer"/>
            </ContinerFooter>
        )
    }
}

export default Fopter;