import classNames from 'classnames/bind'
import './styles.scss'

export const Button = ({ title, styles }) => {
  const classname = classNames('btn', { 'btn-white': styles === 'white' }, { 'btn-blue': styles === 'blue' })

  return <button className={ classname }>{ title }</button>
}