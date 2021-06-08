import ProductsList from '../../components/ProductsList'

const Products = ({ articles }) => {
    return (
        <>
            <h1>All Products</h1>
            <ProductsList products={articles} />
        </>
    )
}

export default Products

export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=20')
    const articles = await res.json()

    return {
        props: {
            articles
        }
    }
}