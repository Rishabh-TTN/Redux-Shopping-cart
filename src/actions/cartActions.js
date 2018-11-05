import { ADD_TO_CART, DELETE_FROM_CART, UPDATE_UNITS } from '../constants';

export const addToCart=({id,name,quantity,price,units=1})=>{
    return {
        type : ADD_TO_CART,
        data:{id,
        name,
        quantity,
        price,
        units}
    }
};

export const deleteFromCart=({id})=>{
    return{
        type: DELETE_FROM_CART,
        data:{id},
    }
};

export const updateUnits=({id,units})=>{
    return{
        type: UPDATE_UNITS,
        data:{id,
        units}
    }
};
