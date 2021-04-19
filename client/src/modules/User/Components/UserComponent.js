
import './style.scss'
import { Breadcrumbs } from "../../../Components"
import {Graphs} from "../Containers/Graphs";

const routes = [
  { path: '/', breadcrumb: 'Main page' },
  { path: '/stats', breadcrumb: 'User satistics' },
  { path: '/user', breadcrumb: 'Samuel Frost' }
]

export const UserComponent = ({ user }) => {
  const date = user.length !== 0 && user[0].date.split('-')
  const newDate = user.length !== 0 ? { year: Number(date[0]), month: Number(date[1]) } : { year: 2019, month: 10 }
  const clicks = user.map(i => i.clicks)
  const page_views = user.map(i => i.page_views)

  return <div className='wrapper user'>
    <Breadcrumbs routes={ routes } />
    <h2 className='user__h2'>Samuel Frost</h2>
    <div>
      <Graphs title='Clicks' date={ newDate } value={ clicks } />
    </div>
    <div>
      <Graphs title='Vievs' date={ newDate } value={ page_views } />
    </div>
  </div>
}