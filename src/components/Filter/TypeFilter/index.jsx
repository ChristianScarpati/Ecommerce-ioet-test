import './TypeFilter.css'
import PropTypes from "prop-types";
import { useContext, useEffect } from "react";
import { SearchContext } from "../../../contexts/SearchContext";

function TypeFilter({ name, options }) {

    const { categoryFilters, setCategoryFilters, handleFilterCategory } = useContext(SearchContext)

    const handleCategory = (category) => {
        const { name, checked, id } = category

        if (checked) {
            setCategoryFilters(prev => [...prev, name])
        } else if (!checked) {
            const removeCategory = categoryFilters.filter((item) => item !== id)
            setCategoryFilters(removeCategory)
        }
    }

    useEffect(() => {
        handleFilterCategory()

    }, [categoryFilters, handleFilterCategory])


    return (
        <div className='TypeFilterContainer'>
            <h2>{name}:</h2>
            {options.map((option, id) =>
                <div
                    key={id}
                    className='CheckBox'
                >
                    <input
                        type="checkbox"
                        id={option.id}
                        name={option.id}
                        onChange={(event) => handleCategory(event.target)}
                    />
                    <label htmlFor={option.id}>{option.id}</label>
                </div>
            )}
        </div>
    )
}

export { TypeFilter }

TypeFilter.propTypes = {
    name: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
        })
    ).isRequired,
}