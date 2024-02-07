import { TiDeleteOutline } from "react-icons/ti";
import PropTypes from "prop-types";
import "./CartCard.css"


export default function CartCard({ product }) {

    const productAmount = product.productAmount > 0 ? <span>{product.productAmount}</span> : <span>0</span>

    return (
        <div className='CartCard'>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                }}
            >
                <img src={product.image} alt={product.title} width={80} height={80} style={{ paddingBottom: '8px' }} />
                <TiDeleteOutline
                    className="deleteIcon"
                />
            </div>

            <span>$ 1000</span>

            <div className="CartQuantityControls">
                <div
                    style={{ padding: '5px' }}
                >
                    <button
                        className={`DecreaseQuantityButton ${product.length === 0 ? 'DecreaseQuantityButtonDisabled' : ''}`}
                        disabled={product.length === 0}
                    >
                        -
                    </button>
                    {
                        productAmount
                    } &nbsp;
                    <button className="IncreaseQuantityButton"> + </button>
                </div>


            </div>
        </div>

    )
}

CartCard.propTypes = {
    product: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired
}