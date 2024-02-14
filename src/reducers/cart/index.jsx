/* eslint-disable no-case-declarations */
import { calculateTotal } from "../../components/utils/cart";

const CART_ACTION = {
    ADD_PRODUCT_COUNTER_TO_CART: "ADD_PRODUCT_COUNTER_TO_CART",
    REMOVE_FROM_CART: "REMOVE_FROM_CART",
    ADD_ITEM_TO_CART: "ADD_ITEM_TO_CART",
    OPEN_CART: "OPEN_CART",
};

export const cartInitialState = {
    cart: [],
    total: 0,
    productAmount: 0,
    toggleSidebarCart: false,
}

export const cartReducer = (state, action) => {

    const setToggleSidebarCart = !state.toggleSidebarCart;

    switch (action.type) {

        case CART_ACTION["ADD_PRODUCT_COUNTER_TO_CART"]:
            const newProductAmount = { ...state.productAmount, [action.payload.id]: (state.productAmount[action.payload.id] || 0) + 1 }
            const newCartWithAmount = [...state.cart, action.payload];
            const newTotalWithAmount = calculateTotal(newCartWithAmount);

            return {
                ...state,
                cart: newCartWithAmount,
                total: newTotalWithAmount,
                productAmount: newProductAmount,
            };

        case CART_ACTION["ADD_ITEM_TO_CART"]:
            const newProductAmount1 = { ...state.productAmount, [action.payload.id]: (state.productAmount[action.payload.id] || 0) + 1 }
            const newCartWithAmount1 = [...state.cart, action.payload];
            const newTotalWithAmount1 = calculateTotal(newCartWithAmount1);

            return {
                ...state,
                cart: newCartWithAmount1,
                total: newTotalWithAmount1,
                productAmount: newProductAmount1,
            };

        case CART_ACTION["REMOVE_FROM_CART"]:

            const productId = action.payload.id;
            const updatedCart = state.cart.filter(product => product.id !== productId);
            const updatedTotal = calculateTotal(updatedCart);
            const updatedProductAmount = state.productAmount - 1;
            return {
                ...state,
                cart: updatedCart,
                total: updatedTotal,
                productAmount: Math.max(updatedProductAmount, 0)
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