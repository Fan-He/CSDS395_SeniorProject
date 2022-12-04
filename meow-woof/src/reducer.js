//reducer connects the data layer
//push and pull data
//always listening

import { startTransition } from "react";

export const initialState = {
    basket: []
};

const reducer = (state, action) => {
    switch(action.type) {
        case 'ADD_TO_BASKET': 
            return {
                ...state,
                basket: [...state.basket, action.item],
            };

        case "REMOVE_FROM_BASKET": 
            const index = state.basket.findIndex((basketItem) => basketItem.id === action.id);
            let newBasket = [...state.basket];
            if(index >= 0) {
                newBasket.splice(index, 1);

            }
            else {
                console.warn(`Cannot remove product (id: ${action}) as it is not in the basket!`);
            }

            return {
                ...state, 
                basket: newBasket
            }
        case "REMOVE_ALL": 
            return {
                ...initialState, 
            }
        default: 
            return state;
    }
};

//Selector
export const getTotalInBasket = (basket) => basket?.reduce((accum,item) => accum + item.price, 0);

export default reducer;