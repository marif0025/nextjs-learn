import Link from 'next/link'
import navStyles from '../styles/nav.module.scss'

const Nav = () => {
    return (
        <header className={navStyles.header}>
            <div className="container">
                <nav className={navStyles.nav}>
                    <Link href="/">
                        <a className={navStyles.logo}>Home</a>
                    </Link>

                    <ul className={navStyles.menu}>
                        <li>
                            <Link href="/products">
                                <a className={navStyles.link}>Products</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact">
                                <a className={navStyles.link}>Contact</a>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Nav
