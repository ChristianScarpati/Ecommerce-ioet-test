import { TypeFilter } from './TypeFilter'
import { RatingFilter } from './RatingFilter'
import './Filter.css'

function Filter () {
    return (
        <aside className='FilterContainer'>
            <TypeFilter
                name='Category'
                options={[
                    {id: "men's clothing", label: "Men's Clothing"},
                    {id: "women's clothing", label: "Women's Clothing"},
                    {id: "jewelery", label: "Jewelery"},
                    {id: "electronics", label: "Electronics"}
                ]}
            />
            <RatingFilter />
        </aside>
    )
}

export { Filter }