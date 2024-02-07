/* eslint-disable no-case-declarations */

const CART_ACTION = {
    ADD_ITEM_TO_CART: "ADD_ITEM_TO_CART",
    OPEN_CART: "OPEN_CART",
};

export const cartInitialState = {
    cart: [],
    total: 0,
    productAmount: 0,
    toggleSidebarCart: false,
    OPEN_CART: false,
}

export const cartReducer = (state, action) => {
    
    const setToggleSidebarCart = !state.toggleSidebarCart;

    switch (action.type) {

        case CART_ACTION["ADD_ITEM_TO_CART"]:
            const newCart = [...state.cart, action.payload];
            const newTotal = 1000
            const addNewItem = state.productAmount++;

            return {
                ...state,
                cart: newCart,
                total: newTotal,
                productAmount: addNewItem,
                toggleSidebarCart: setToggleSidebarCart,
            };

        case CART_ACTION["OPEN_CART"]:
            return {
                ...state,
                toggleSidebarCart: setToggleSidebarCart,
            };

        default:
            return state;
    }
};