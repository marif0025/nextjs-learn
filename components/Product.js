import Link from "next/link"
import Image from "next/image"

import CardStyles from '../styles/ProductsList.module.scss'

const Product = ({ product }) => {
    return (
        <Link href="/products/[id]" as={`/products/${product.id}`}>
            <a className={CardStyles.card}>
                <div className={CardStyles.thumbnail} style={{ backgroundImage: "url(/images/thumbnail.jpg)" }}>
                    {/* <img src="/images/thumbnail.jpg" /> */}
                </div>
                <div className={CardStyles.body}>
                    <h3 className={CardStyles.title}>{product.title}</h3>
                    <p className={CardStyles.description}>{product.body}</p>
                </div>
            </a>
        </Link>
    )
}

export default Product
