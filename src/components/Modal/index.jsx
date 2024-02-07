import { useContext } from 'react';
import './Modal.css'
import { Rating } from "../Filter/RatingFilter/Rating"
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { SearchContext } from '../../contexts/SearchContext';
function Modal() {
    const {
        setIsOpen,
        imageProduct,
        titleProduct,
        priceProduct,
        descriptionProduct,
        productRate,
        cartState,
        cartDispatch,
        productId
    } = useContext(SearchContext);

    const setCloseModal = () => {
        setIsOpen(false)
    }

    const handleAddProduct = () => {
        cartDispatch({
            type: 'ADD_ITEM_TO_CART',
            payload: {
                id: productId,
                image: imageProduct,
                title: titleProduct,
                price: priceProduct,
                description: descriptionProduct,
                productRate: productRate
            }
        })
        setIsOpen(false)
    }

    return (
        <div className='ModalContainer'>
            <div className='ContentModalContainer'>
                <div className='ProductImageContainer'>
                    <AiOutlineCloseCircle className='closeModal' onClick={setCloseModal} />
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
                            >-</button>
                            {
                                cartState.productAmount > 0 ?
                                    <span>{cartState.productAmount}</span> :
                                    <span>0</span>
                            } &nbsp;
                            <button className="IncreaseQuantityButtonModal"
                            >+</button>
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