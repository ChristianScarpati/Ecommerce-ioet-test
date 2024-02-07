import { useContext } from 'react'
import './CartLogo.css'
import { SearchContext } from '../../contexts/SearchContext'

function CartLogo() {

    const { cartDispatch } = useContext(SearchContext)

    return (
        <div
            className='cartLogoContainer'
            onClick={() => cartDispatch({ type: 'OPEN_CART' })}
        >
            <img src='src/assets/CartLogo/shopping-cart.png' />
        </div>
    )
}

export { CartLogo }