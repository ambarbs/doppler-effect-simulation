import React, {Component} from 'react';
import {connect} from 'react-redux'
import Velocity from "./Velocity";
import {VelocityWrapper, VelocitySlider} from "./Velocity.styles";
import {setVelocity} from "../../store/thunks";

class VelocityContainer extends Component {
    render() {
        const {velocity, actions} = this.props;
        return (
            <>
                <VelocityWrapper
                    minWidth={'800px'}
                >
                    <Velocity
                        velocity={velocity}
                        setVelocity={actions.setVelocity}
                    />
                    <VelocitySlider type="range" min="-100" max="100" value={velocity}
                                    onChange={(e) => actions.setVelocity(e.target.value)}
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