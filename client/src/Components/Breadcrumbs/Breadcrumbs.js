import { Link } from 'react-router-dom'
import classNames from 'classnames'
import './styles.scss'

export const Breadcrumbs = ({ routes }) => {
  return routes.map((i, index) => {
    return <span className={ classNames('breadcrumbs', { 'breadcrumbs__active': routes.length -1 === index }) } key={ index }>
      <Link to={ i.path }>{ i.breadcrumb }</Link>
      { index + 1 !== routes.length && <span className='breadcrumbs__arrow'>></span> }
    </span>
  })
}