import { useHistory } from "react-router-dom"
import classNames from "classnames/bind";
import { Breadcrumbs } from "../../../Components"
import './styles.scss'

const routes = [
  { path: '/', breadcrumb: 'Main page' },
  { path: '/stats', breadcrumb: 'User satistics' }
]

const arrBtn = [ 1, 2, 3, 4, 5 ]

export const StatsComponent = ({ users, btnActive, setBtnActive }) => {
  let history = useHistory()

  const handleClick = id => {
    history.push(`/user/${id}`)
  }

  const handleClick2 = (id) => {
    setBtnActive(id)
  }

  return <div className='wrapper stats'>
    <Breadcrumbs routes={ routes } />
    <h2 className='stats__h2'>Users statistics</h2>
    <div style={{ overflowX: 'scroll' }}>
      <table>
        <thead>
        <tr>
          <th>Id</th>
          <th>First name</th>
          <th>Last name</th>
          <th>Email</th>
          <th>Gender</th>
          <th>IP address</th>
          <th>Total clicks</th>
          <th>Total page views</th>
        </tr>
        </thead>
        <tbody>
        {
          Object.keys(users).map((i, index) => {
            return <tr key={ index } onClick={() => handleClick(i)}>
              <td>{ users[i].id }</td>
              <td>{ users[i].first_name }</td>
              <td>{ users[i].last_name }</td>
              <td>{ users[i].email }</td>
              <td>{ users[i].gender }</td>
              <td>{ users[i].ip_address }</td>
              <td>{ users[i].total_clicks }</td>
              <td>{ users[i].total_page_views }</td>
            </tr>
          })
        }
        </tbody>
      </table>
    </div>

    <div className='stats__btnBlock'>
      {
        arrBtn.map(i => <button onClick={ () => handleClick2(i) } key={ i } className={ classNames('stats__btn', { 'stats__btn-blue': i === btnActive }) }>{ i }</button>)
      }
    </div>
  </div>
}