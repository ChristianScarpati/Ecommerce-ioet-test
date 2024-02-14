import { useContext } from 'react';
import { Detail } from './Detail'
import { SearchContext } from '../../../contexts/SearchContext';
import PropTypes from "prop-types";
import './Card.css'
import { nanoid } from 'nanoid';

function Card({ image, title, price, description, productRate }) {
    const {
        setIsOpen,
        setImageProduct,
        setTitleProduct,
        setPriceProduct,
        setDescriptionProduct,
        setProductRate,
        setProductId
    } = useContext(SearchContext);

    const openModal = () => {
        setIsOpen(true)
        setImageProduct(image)
        setTitleProduct(title)
        setPriceProduct(price)
        setDescriptionProduct(description)
        setProductRate(productRate)
        setProductId(nanoid())
    }

    return (
        <div className='CardContainer' onClick={openModal}>
            <div className='ProductImageContainer'>
                <img src={image} />
            </div>
            <Detail
                title={title}
                price={price}
                productRate={productRate}
            />
        </div>
    )
}

export { Card }

Card.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    productRate: PropTypes.number.isRequired,
}