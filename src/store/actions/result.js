import * as actionTypes from './actionTypes';

const saveResult = (res) => {
    return {
        type: actionTypes.STORE_RESULT,
        result: res
    }
}

export const storeResult = (res) => {
    return (dispatch, getState) => {
        // let oldCounter = getState().ctrReducer.counter;
        // console.log(oldCounter);
        setTimeout(() => {
            return dispatch(saveResult(res))
        }, 2000)
    }
}

export const deleteResult = (resId) => {
    return {
        type: actionTypes.DELETE_RESULT,
        resultElemId: resId
    }
}