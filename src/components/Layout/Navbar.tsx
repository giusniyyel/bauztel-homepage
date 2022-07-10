//import { useRouter } from 'next/router'
import Link from 'next/link'
import styles from './Navbar.module.scss'
import { Bauztel, CartIcon, UserIcon } from '../../shared/data/Logos'

const navLinks = {
  '/': 'Inicio',
  '/about': 'Nosotros',
  '/contact': 'Contáctanos',
}

const NavLink = ({ path }: { path: string }) => {
  const title = navLinks[path]
  return (
    <Link href={path}>
      <a className={styles.link}>{title}</a>
    </Link>
  )
}
export const Navbar = () => {
  // const { asPath } = useRouter()

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Bauztel />
      </div>
      <nav className={styles.navbar}>
        <ul className={styles.list}>
          <NavLink path='/' />
          <NavLink path='/about' />
          <NavLink path='/contact' />
        </ul>
        <button>Vender ya!</button>
        <span className={styles.cart}>
          <CartIcon />
        </span>
        <span className={styles.cart}>
          <UserIcon />
        </span>
      </nav>
    </header>
  )
}
