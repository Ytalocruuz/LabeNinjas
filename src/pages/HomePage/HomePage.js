import React from "react"
import {HomePageContainer} from "./styled"
import Button from "@material-ui/core/Button"
import Footer from "./../../components/Footer/Footer"

class HomePage extends React.Component {
    render(){
        return(
            <HomePageContainer>
                <h2>O talento certo no momento certo</h2>
                <div>
                    <Button variant="contained" onClick={() => this.props.changePage("form")}>Quero ser um Ninja</Button>
                    <Button varient="contained" onClick={() => this.props.changePage("list")}>Contratar um Ninja</Button>
                </div>
                <Footer />
            </HomePageContainer>
        )
    }
}

export default HomePage