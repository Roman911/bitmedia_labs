import { useLocation } from 'react-router-dom'
import classNames from 'classnames/bind'
import './styles.scss'

export const Footer = () => {
  let { pathname } = useLocation()
  const classname = classNames('footer', { 'footer-darkBlue': pathname !== '/' })

  return <div className={ classname }>
    <div className='wrapper flexSB'>
      <span className='footer__logo'>AppCo</span>
      <p className='footer__p'>All rights reserved by ThemeTags</p>
      <p className='footer__p'>Copyrights © 2019.</p>
    </div>
  </div>
}