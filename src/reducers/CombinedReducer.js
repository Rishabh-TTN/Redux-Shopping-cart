import {combineReducers} from "redux";
import {ProductReducer} from "./ProductReducer";
import {CartReducer} from "./CartReducer";

export const reducer= combineReducers({
    products:ProductReducer,
    cart : CartReducer
})
