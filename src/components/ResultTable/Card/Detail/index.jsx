import { Rating } from "../../../Filter/RatingFilter/Rating"
import PropTypes from "prop-types";
import './Detail.css'

function Detail({ title, price, productRate }) {
    return (
        <div className="DetailsCardContainer">
            <h3>{title}</h3>
            <Rating stars={productRate} />
            <h3>${price}</h3>
        </div>
    )
}

export { Detail }

Detail.propTypes = {
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    productRate: PropTypes.number.isRequired
}