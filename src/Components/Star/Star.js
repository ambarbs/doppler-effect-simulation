import React, {Component} from "react";
import PropTypes from 'prop-types';
import starImage from "../../assets/star-small.png";
import {ImageStar} from "./Star.styles";

export default class Star extends Component {
    static getSepia(velocity) {
        if (velocity >= 0 && velocity <= 100) { // red
            return 4;
        } else if (velocity < 0 && velocity >= -100) { //blue
            return 0;
        }
        return 0;
    }

    static getHueRotate(velocity) {
        if (velocity >= 0 && velocity <= 100) { // red
            return 340;
        } else if (velocity < 0 && velocity >= -100) { // blue
            return 170;
        }
        return 0;
    }

    static getSaturate(velocity, sliderValue) {
        if (velocity >= 0 && velocity <= 100) { // red
            return sliderValue * 2;
        } else if (velocity < 0 && velocity >= -100) { // blue
            return parseInt(sliderValue * -0.1);
        }
        return 0;
    }

    render() {
        const {velocity} = this.props;

        let velocityValue = velocity;
        if (velocity < 0) {
            velocityValue = -1 * parseInt(Math.pow(-1 * velocity, 1.3), 10);
        }
        const sepia = Star.getSepia(velocity);
        const hueRotate = Star.getHueRotate(velocity);
        const saturate = Star.getSaturate(velocity, velocityValue);

        return <ImageStar
            src={starImage}
            sepia={sepia}
            hueRotate={hueRotate}
            saturate={saturate}
        />
    }
}


Star.propTypes = {
    velocity: PropTypes.number,
}

Star.defaultProps = {}