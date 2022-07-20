import Link from 'next/link'
import styles from './Navbar.module.scss'
import { Bauztel, CartIcon, MenuIcon, UserIcon } from '../../shared/data/Logos'
import { useState } from 'react'

const navLinks = {
  '/': 'Inicio',
  '/about': 'Nosotros',
  '/contact': 'Contáctanos',
  '/become-seller': 'Vender Café',
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
  const [isOpen, setIsOpen] = useState(false)
  const handleClick = () => setIsOpen(!isOpen)
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Bauztel />
      </div>
      <nav className={styles.navbar}>
        <ul className={styles.list + ` ${isOpen ? styles.active : ''}`}>
          <NavLink path='/' />
          <NavLink path='/about' />
          <NavLink path='/contact' />
          <NavLink path='/become-seller' />
        </ul>
        <span className={styles.user}>
          <UserIcon />
        </span>
        <span className={styles.cart}>
          <CartIcon />
        </span>
        <button className={styles.menu} onClick={handleClick}>
          <MenuIcon />
        </button>
      </nav>
    </header>
  )
}
