import React, {Component} from 'react';
import {AppWrapper} from "./App.styles";
import VelocityContainer from "../Velocity/VelocityContainer";
import Star from "../Star/Star";

class App extends Component {

    render() {
        const {velocity} = this.props;
        return (
            <AppWrapper>
                <Star
                    velocity={velocity}
                />
                <VelocityContainer/>
            </AppWrapper>
        );
    }
}

export default App;
