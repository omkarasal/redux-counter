import * as actionTypes from './actions/actionTypes';

const initialState = {
    counter: 0,
    results: []
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.INCREMENT:
            return {
                ...state,
                counter: state.counter + 1
            }
        case actionTypes.DECREMENT:
            return {
                ...state,
                counter: state.counter - 1
            }
        case actionTypes.ADDITION:
            return {
                ...state,
                counter: state.counter + action.value
            }
        case actionTypes.SUBSTRACTION:
            return {
                ...state,
                counter: state.counter - action.value
            }
        case actionTypes.STORE_RESULT:
            return {
                ...state,
                results: state.results.concat({id: new Date(), value: state.counter})
            }
        case actionTypes.DELETE_RESULT:
            // let id = 2;
            // let newArray = [...state.results];
            // newArray.splice(id, 1);
            const newArray = state.results.filter(result => result.id !== action.resultElementId)
            return {
                ...state,
                results: newArray
            }
        default:
            return state;
    }
}

export default reducer;