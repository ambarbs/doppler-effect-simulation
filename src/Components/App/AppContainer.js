import React, {Component} from 'react';
import {connect} from 'react-redux';
import App from "./App";
import {setVelocity} from "../../store/thunks";

class AppContainer extends Component {
    render() {
        return (
            <App
                velocity={this.props.velocity}
            />
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
)(AppContainer)