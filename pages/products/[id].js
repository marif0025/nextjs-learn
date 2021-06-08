import Link from "next/link"
import Meta from '../../components/Meta'

const Details = ({ article }) => {
    console.log(article);
    return (
        <>
            <Meta article={article.title} />
            <Link href="/products">
                <a>Go Back to Product Page</a>
            </Link>

            <h1>{article.title}</h1>
            <p>{article.body}</p>

        </>
    )
}

export default Details

export const getStaticProps = async (context) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)
    const article = await res.json()

    return {
        props: {
            article
        }
    }
}

export const getStaticPaths = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
    const articles = await res.json()

    const ids = articles.map(article => article.id)
    const paths = ids.map(id => ({ params: { id: id.toString() } }))

    return {
        paths,
        fallback: false
    }
}