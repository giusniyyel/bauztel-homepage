import { useRouter } from 'next/router'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import { Logo } from '../Utils/Logo'
import Link from 'next/link'
import styles from './Navbar.module.scss'
import { Bauztel } from '../../shared/data/Logos'
import { CartIcon } from '../../shared/data/Logos'
import { UserIcon } from '../../shared/data/Logos'

type LinkItemProps = {
  children?: React.ReactNode
  href: string
  path: string
  target?: string
}

const LinkItem = (props: LinkItemProps) => {
  const active = props.path === props.href
  const inactiveColor = '#1E3760'
}

const navLinks = {
  '/': 'Inicio',
  '/about-us': 'Nosotros',
  '/contact': 'Contactanos',
}

const NavLink = ({ path }: { path: string }) => {
  const title = navLinks[path]
  return (
    <Link href={path}>
      <a className={styles.link}>{title}</a>
    </Link>
  )
}
export const Navbar = (props: any) => {
  const { asPath } = useRouter()

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Bauztel />
      </div>
      <nav className={styles.navbar}>
        <ul className={styles.list}>
          <NavLink path='/' />
          <NavLink path='/about-us' />
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
