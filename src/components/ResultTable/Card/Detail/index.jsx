import { Rating } from "../../../Filter/RatingFilter/Rating"
import PropTypes from "prop-types";
import './Detail.css'

function Detail({ title, price, productRate }) {
    return (
        <div className="DetailsCardContainer">
            <h3>{title}</h3>
            <Rating stars={productRate} />
            <h3>${price}</h3>
            <br />
            <div className="AddToCartContainer">
                <button className="AddToCartButton"
                    onClick={(e) => e.stopPropagation()}
                >+</button>
                <button className="AddToCartButton"
                    onClick={(e) => e.stopPropagation()}
                >-</button>
            </div>
        </div>
    )
}

export { Detail }

Detail.propTypes = {
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    productRate: PropTypes.number.isRequired
}