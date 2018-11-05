import {ADD_TO_CART, DELETE_FROM_CART, UPDATE_UNITS} from '../constants';

export const CartReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_TO_CART:
            //return state.concat(action.data);
            return[...state,action.data];

        case UPDATE_UNITS: {
            // const firstMatchIndex = state.indexOf(action.data.id);
            for (let i = 0; i < state.length + 1; i++) { if (state[i].id === action.data.id) { var index = i; break; } }
            if (state[index].units === 0 && action.data.units === -1) {
                break;
            }
            state[index].units += action.data.units;
            return state.concat([]);
        }
        case DELETE_FROM_CART: {
            for (let i = 0; i < state.length + 1; i++) { if (state[i].id === action.data.id) { var index = i; break; } }
            // return state.filter((item,index) => index !== firstMatchIndex );
            return [...state.slice(0, index), ...state.slice(index + 1)];
        }
        default :
            return state;
}
}