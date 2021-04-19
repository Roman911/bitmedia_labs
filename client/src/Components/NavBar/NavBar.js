import { Link, useLocation } from 'react-router-dom'
import classNames from 'classnames/bind'
import './styles.scss'

export const NavBar = () => {
  let { pathname } = useLocation()
  const classname = classNames('navBar', { 'navBar__bg': pathname !== '/' })

  return <nav className={ classname }>
    <div className='wrapper'>
      <Link to='/' >
        <span className='navBar__logo'>AppCo</span>
      </Link>
    </div>
  </nav>
}