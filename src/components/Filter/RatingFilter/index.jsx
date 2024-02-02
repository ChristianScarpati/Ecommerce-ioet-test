import { useContext, useEffect } from 'react'
import { Rating } from './Rating'
import './RatingFilter.css'
import { SearchContext } from '../../../contexts/SearchContext'
import { RATE_OPTIONS } from "../../constants"

function RatingFilter() {

    const { rateOptionProduct, setRateOptionProduct, handleFilterRate } = useContext(SearchContext)

    useEffect(() => {
        handleFilterRate()

    }, [handleFilterRate, rateOptionProduct])


    return (
        <div className='RatingFilterContainer'>
            <h2>Rates:</h2>
            <div className='RatingsContainer'>
                {
                    RATE_OPTIONS.map((el, idx) => {
                        return (
                            <div
                                key={idx}
                                className='RatingFilterBox'
                            >
                                <input
                                    type="radio"
                                    id={`rate-${el}`}
                                    name="rate"
                                    value={el}
                                    checked={rateOptionProduct === el}
                                    onChange={() => setRateOptionProduct(el)}
                                />
                                <label htmlFor={`rate-${el}`}>
                                    <Rating stars={el} />
                                </label>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export { RatingFilter }
