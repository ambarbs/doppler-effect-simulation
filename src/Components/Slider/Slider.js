import React from "react";
import PropTypes from 'prop-types';
import {SliderWrapper} from './Slider.styles';

const Slider = ({onSliderChange, value, min, max}) =>
    <SliderWrapper type="range" min={min} max={max} value={value}
                    onChange={(e) => onSliderChange(e.target.value)}
    />

export default Slider;

Slider.propTypes = {
    value: PropTypes.number,
    min: PropTypes.number,
    max: PropTypes.number,
    onSliderChange: PropTypes.func,
};

Slider.defaultProps = {
    value: 0,
    min: 0,
    max: 100,
};