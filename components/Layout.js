import Head from 'next/head'
import Nav from '../components/Nav'
import Meta from '../components/Meta'

const Layout = ({ children }) => {
    return (
        <>
            <Meta />
            <Nav />
            <div className="container">
                {children}
            </div>
        </>
    )
}

export default Layout
