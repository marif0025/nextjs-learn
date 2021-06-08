import Link from 'next/link'
import Product from './Product'
import CardStyles from '../styles/ProductsList.module.scss'

const ProductsList = ({ products }) => {
    return (
        <div className={CardStyles.cards}>
            {products.map(product => (
                <Product key={product.id} product={product} />
            ))}
        </div>
    )
}

export default ProductsList
