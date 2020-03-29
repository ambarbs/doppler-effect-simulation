import {actionType} from "./constants";

export const setVelocity = (velocity) => {
    return async (dispatch) => {
        return dispatch({type: actionType.VELOCITY, payload: velocity})
    }
}