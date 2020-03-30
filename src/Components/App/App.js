import React, {Component} from 'react';
import {AppWrapper, ImageStar} from "./App.styles";
import VelocityContainer from "../Velocity/VelocityContainer";
import starImage from "../../assets/star-small.png"

class App extends Component {

    static getSepia(velocity) {
        // red
        if (velocity >= 0 && velocity <= 100) {
            return 4;
        } else if (velocity < 0 && velocity >= -100) {
            return 0;
        }
        return 0;
    }

    static getHueRotate(velocity) {
        if (velocity >= 0 && velocity <= 100) {
            return 340;
            // return  100 * velocity / 100;
        } else if (velocity < 0 && velocity >= -100) {
            return 170;
            // return 190 * Math.abs( velocity / 100);
        }
        return 0;
    }

    static getSaturate(velocity, sliderValue) {
        if (velocity >= 0 && velocity <= 100) {
            return sliderValue * 2;
            // return  10000 * velocity / 100;
        } else if (velocity < 0 && velocity >= -100) {
            return parseInt(sliderValue * -0.1);
            // return 15000 * Math.abs( velocity / 100);
        }
        return 0;
    }

    render() {

        const {velocity} = this.props;

        let velocityValue = velocity;
        if(velocity < 0){
            velocityValue =  -1 * parseInt(Math.pow(-1 * velocity, 1.3), 10);
        }
        const sepia = App.getSepia(velocity);
        const hueRotate = App.getHueRotate(velocity);
        const saturate = App.getSaturate(velocity, velocityValue);

        return (
            <AppWrapper>
                <ImageStar
                    src={starImage}
                    sepia={sepia}
                    hueRotate={hueRotate}
                    saturate={saturate}
                />
                <VelocityContainer/>
            </AppWrapper>
        );
    }
}

export default App;
