import { TiDeleteOutline } from "react-icons/ti";
import PropTypes from "prop-types";
import "./CartCard.css"
import { useContext } from "react";
import { SearchContext } from "../../../contexts/SearchContext";


export default function CartCard({ product }) {
    const { cartDispatch, cartState, handlers } = useContext(SearchContext);

    const { handleRemoveFromCart, handleAddProductCounter } = handlers;

    const checkQuantityAmountProductSelected = (product) => {
        return cartState.cart.reduce((count, cartProduct) => {
            if (cartProduct.id === product.id) {
                return count + 1
            }
            return count;
        }, 0);
    };

    const truncatedTitle = product.title.length > 50 ? `${product.title.substring(0, 50)}...` : product.title;

    return (
        <div className='CartCard'>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                }}
                onClick={() => cartDispatch({
                    type: 'REMOVE_FROM_CART',
                    payload: product.id
                })}
            >
                <img src={product.image} alt={product.title} width={80} height={80} style={{ paddingBottom: '8px' }} />
                <TiDeleteOutline
                    className="deleteIcon"
                />
            </div>

            <span>{truncatedTitle}</span>
            <span style={{ fontWeight: 'bold' }}> $ {product.price}  </span>

            <div className="CartQuantityControls">
                <div
                    style={{ padding: '5px' }}
                >
                    <button
                        className={`DecreaseQuantityButton ${product.length === 0 ? 'DecreaseQuantityButtonDisabled' : ''}`}
                        disabled={product.length === 0}
                        onClick={() => handleRemoveFromCart(product)}
                    >
                        -
                    </button>

                    <span style={{ margin: "0px 15px" }} >{checkQuantityAmountProductSelected(product)} </span>
                    <button
                        className="IncreaseQuantityButton"
                        onClick={() => handleAddProductCounter(product.id)}
                    > + </button>
                </div>
            </div>
        </div>

    )
}

CartCard.propTypes = {
    product: PropTypes.object.isRequired,
}