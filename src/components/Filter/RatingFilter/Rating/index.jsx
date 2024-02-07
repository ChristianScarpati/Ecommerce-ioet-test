import { AiOutlineStar } from 'react-icons/ai'
import PropTypes from "prop-types";
import './Rating.css'


function Rating({ stars }) {

    const fillStars = () => {
        const labels = [];
        const starSelected = [...Array(stars)].map((_, index) => (
            <AiOutlineStar className='StarFilled' key={index} />
        ))
        const starNotSelected = [...Array(5 - stars)].map((_, index) => (
            <AiOutlineStar className='StarNotFilled' key={index} />
        ))
        labels.push(starSelected)
        labels.push(starNotSelected)
        return labels
    }

    return (
        <div className='RatingContainer'>
            {fillStars()}
        </div>
    )
}

export { Rating }

Rating.propTypes = {
    stars: PropTypes.number.isRequired,
};
