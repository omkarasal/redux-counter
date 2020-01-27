import * as actionTypes from './actionTypes';

export const increment = () => {
    return {
        type: actionTypes.INCREMENT
    }
}

export const decrement = () => {
    return {
        type: actionTypes.DECREMENT
    }
}

export const addition = (val) => {
    return {
        type: actionTypes.ADDITION,
        value: val
    }
}

export const substraction = (val) => {
    return {
        type: actionTypes.SUBSTRACTION,
        value: val
    }
}