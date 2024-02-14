import "./Cart.css";
import { useContext } from 'react';
import { SearchContext } from '../../contexts/SearchContext';
import CartCard from "./CartCard";
import { calculateTotal, consolidateCart } from "../utils/cart";

export default function Cart() {

    const { cartState, isLoading } = useContext(SearchContext);

    if (isLoading) return <span className="loader"></span>

    const cartIsEmpty = cartState.cart.length === 0;
    return (
        <div
            className={`CartContainer ${cartState.toggleSidebarCart && 'open'}`}
            style={{ display: cartState.toggleSidebarCart ? 'block' : '' }}
        >
            <div className='CartHeader'>
                <h2> Subtotal: </h2>
                <span>
                    $ {calculateTotal(cartState.cart)}
                </span>
                <button className='ButtonContinueToPurchase'> Continue </button>

            </div>
            <div className='CartResultsContainer'>
                {cartIsEmpty && <p>Your cart is empty</p>}
                {
                    cartState.cart.length > 0 && consolidateCart(cartState.cart).map((product) => {
                        return (
                            <CartCard
                                key={product.id}
                                product={product}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}
