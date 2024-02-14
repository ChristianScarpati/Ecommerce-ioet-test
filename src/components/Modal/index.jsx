import { useContext } from 'react';
import './Modal.css'
import { Rating } from "../Filter/RatingFilter/Rating"
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { SearchContext } from '../../contexts/SearchContext';

function Modal() {
    const {
        setIsOpen,
        cartState,
        imageProduct,
        titleProduct,
        priceProduct,
        descriptionProduct,
        productRate,
        handlers
    } = useContext(SearchContext);

    const { handleAddProduct, handleAddProductCounter, handleRemoveFromCart } = handlers;

    const productLengthAlreadyExistInCart = cartState.cart.filter(product => product.title === titleProduct).length;

    return (
        <div className='ModalContainer'>
            <div className='ContentModalContainer'>
                <div className='ProductImageContainer'>
                    <AiOutlineCloseCircle className='closeModal' onClick={() => setIsOpen(false)} />
                    <img src={imageProduct} />
                </div>
                <div className="DetailsModalContainer">
                    <div className="HeaderDetailModalContainer">
                        <h3>{titleProduct}</h3>
                        <h3>${priceProduct}</h3>
                    </div>
                    <Rating stars={productRate || 5} />
                    <h6>{descriptionProduct}</h6>

                    <div className="CartQuantityControlsModal">
                        <div>
                            <button
                                className={`DecreaseQuantityButtonModal ${cartState.length === 0 ? 'DecreaseQuantityButtonModalDisabled' : ''}`}
                                disabled={cartState.length === 0}
                                onClick={handleRemoveFromCart}
                            >-</button>
                            {
                                <span>{productLengthAlreadyExistInCart}</span>
                            } &nbsp;
                            <button
                                className="IncreaseQuantityButtonModal"
                                onClick={handleAddProductCounter}>
                                +
                            </button>
                        </div>
                        <div>
                            <button
                                className='AddToCartMainButton'
                                onClick={handleAddProduct}
                            >
                                add
                            </button>
                        </div>

                    </div>
                </div>


            </div>
        </div >
    )
}

export { Modal }