import React from "react";
import { HomePageContainer } from './styled'


class HomePage extends React.Component {
    render() {
        return (
            <HomePageContainer>
                <h1>LabeNinjas</h1>
                <h3>O talento certo no momento certo</h3>
                <div>
                    <button onclick = {() => this.props.changePage("form")}>Quero ser um ninja</button>
                    <button onClick={() => this.props.changePage("list")}>Contratar um ninja</button>
                </div>
            </HomePageContainer>
        )
    }
}

export default HomePage;