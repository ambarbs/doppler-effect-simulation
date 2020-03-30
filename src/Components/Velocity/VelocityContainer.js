import React, {Component} from 'react';
import {connect} from 'react-redux'
import Velocity from "./Velocity";
import {VelocityWrapper} from "./Velocity.styles";
import {setVelocity} from "../../store/thunks";
import Slider from "../Slider/Slider";

class VelocityContainer extends Component {
    constructor(props) {
        super(props);
        this.onSliderChange = this.onSliderChange.bind(this);
    }

    onSliderChange(sliderValue){
        let velocityValue = sliderValue;
        if(sliderValue < 0){
            velocityValue = -1 * parseInt(Math.pow(-1 * sliderValue, 1/1.3), 10);
        }
        this.props.actions.setVelocity(velocityValue);
    }

    render() {
        const {velocity, actions} = this.props;

        const sliderValue
            = velocity < 0 ? -1*(Math.pow(-1 * velocity,1.3)).toFixed(0)
            : velocity;

        return (
            <>
                <VelocityWrapper
                    minWidth={'800px'}
                >
                    <Velocity
                        velocity={velocity}
                        setVelocity={actions.setVelocity}
                    />
                   <Slider
                        value={sliderValue}
                        min='-399'
                        max='100'
                        onSliderChange={this.onSliderChange}
                   />
                </VelocityWrapper>

            </>
        )
    }
}

const mapStateToProps = state => (
    {
        velocity: state.appReducer.velocity,
    }
)

const mapDispatchToProps = (dispatch) => (
    {
        actions: {
            setVelocity: velocity => {
                return dispatch(setVelocity(velocity))
            }
        }
    }
)

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(VelocityContainer)