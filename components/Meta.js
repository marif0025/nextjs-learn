import Head from 'next/head'

const Meta = ({ title, keywords, description }) => {
    return (
        <Head>
            <meta key="description" name="description" content={description} />
            <meta key="viewport" name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta key="keywords" name="keywords" content={keywords} />
            <link rel="icon" href="/favicon.ico" type="image/x-icon" />
            <title>{title}</title>
        </Head>
    )
}

Meta.defaultProps = {
    title: 'Learn Next.js',
    keywords: 'next.js, react, learn react',
    description: 'Learn next.js framework'
}

export default Meta
