import { useContext } from 'react';
import { SearchContext } from '../../contexts/SearchContext';
import { Card } from './Card'
import { Modal } from '../Modal'
import './ResultTable.css'

function ResultTable() {
    const {
        searchedProducts,
        isLoading,
        isOpen,
    } = useContext(SearchContext);

    if (isLoading) return <span className="loader"></span>

    return (
        <section className='ResultContainer'>
            <h2>Results:</h2>
            <div className='CardResultsContainer'>
                {searchedProducts.map((product, index) => {
                    return <Card
                        key={index}
                        productId={`product.id-${index}`}
                        image={product.image}
                        title={product.title}
                        price={product.price}
                        description={product.description}
                        productRate={Math.round(product.rating.rate)}
                    />
                })
                }
            </div>
            {isOpen && <Modal />}
        </section>
    )
}

export { ResultTable }
