import React, {Component} from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import {VelocityInput, VelocityLabel, VelocityWrapper} from "./Velocity.styles";


export default class Velocity extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: ''
        }

        // Delay action 2 seconds
        this.validateAndSetVelocity = _.debounce(this.validateAndSetVelocity, 200)
        this.validateAndSetVelocity = this.validateAndSetVelocity.bind(this);
    }

    handleInputChange = (e) => {
        const value = _.get(e, 'target.value', null);

        this.setState({
            value
        })

        // Execute the debounced onChange method
        this.validateAndSetVelocity(value)
    }

    validateAndSetVelocity(value) {
        let adjustValueInRange = value;
        if (/^-?\d*\.?\d{0,6}$/.test(value)) {
            if (value > 100) {
                adjustValueInRange = 100;
                this.setState({
                    value: 100
                })
            } else if (value < -100) {
                adjustValueInRange = -100;
                this.setState({
                    value: -100
                })
            }
            this.props.setVelocity(adjustValueInRange);
        }
    }

    render() {
        const {velocity} = this.props;
        return <VelocityWrapper>
            <VelocityLabel>Velocity (km/s)</VelocityLabel>
            <VelocityInput
                type='text'
                value={velocity}
                onChange={this.handleInputChange}
            />
        </VelocityWrapper>
    }
}

Velocity.propTypes = {
    velocity: PropTypes.number
};

Velocity.defaultProps = {
    velocity: ''
};