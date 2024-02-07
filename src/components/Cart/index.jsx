import "./Cart.css";
import { useContext, Component } from 'react';
import { SearchContext } from '../../contexts/SearchContext';
import CartCard from "./CartCard";

export default function Cart() {

    const { cartState, cartDispatch, isLoading } = useContext(SearchContext);

    if (isLoading) return <span className="loader"></span>

    const cartIsNotEmpty = cartState.cart.length === 0 ? <p>Your cart is empty</p> : <Component />

    return (
        <div
            className={`CartContainer ${cartState.toggleSidebarCart && 'open'}`}
            style={{ display: cartState.toggleSidebarCart ? 'block' : '' }}
        >
            <div className='CartHeader'>
                <h2> Subtotal: </h2>
                <span>
                    ${cartState.cart.length * 100}
                </span>
                <button className='ButtonContinueToPurchase'> Continue </button>

            </div>
            <div className='CartResultsContainer'>
                {
                    cartIsNotEmpty && cartState.cart.map((product, index) => {
                        return (
                            <CartCard
                                key={index}
                                product={product}
                                cartDispatch={cartDispatch}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}
