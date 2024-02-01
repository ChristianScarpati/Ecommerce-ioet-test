import './SortFilter.css'
import { useContext } from 'react'
import { SearchContext } from "../../../contexts/SearchContext"


function SortFilter() {

    const { setSortFilterProducts, sortFilterProducts } = useContext(SearchContext)

    return (
        <div className='SortFilterContainer'>
            <select
                name="order"
                id="order"
                value={sortFilterProducts}
                onChange={(e) => setSortFilterProducts(e.target.value)}
            >
                <option value="Name">Name</option>
                <option value="Price_Low">Price: Low to High</option>
                <option value="Price_High">Price: High to Low</option>
            </select>
        </div>
    )
}

export { SortFilter }
