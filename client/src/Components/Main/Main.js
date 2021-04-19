import { Link } from 'react-router-dom'
import './styles.scss'
import { Button } from "../Button"
import mobile from '../../assets/mobile.png'
import { Card } from './Card'
import { cardItems } from './card.config'

export const Main = () => {
  return <main>
    <div className='top' >
      <div className='wrapper flexSB'>
        <div className='top__title'>
          <h1><span className='top__title-bold'>Brainstorming</span> for desired perfect Usability</h1>
          <h4 className='top__h4'>Our design projects are fresh and simple and will benefit your business greatly. Learn more about our work!</h4>
          <Link to='/stats'>
            <Button title='Views Stats' styles='white' />
          </Link>
        </div>
      </div>
      <img className='top__mobile' src={ mobile } alt=""/>
    </div>
    <div className='center'>
      <h2 className='center__title'>Why <span className='center__title-bold'>small business owners love</span> AppCo?</h2>
      <h4 className='center__p'>Our design projects are fresh and simple and will benefit your business greatly. Learn more about our work!</h4>
      <div className='center__card'>
        {
          cardItems.map((item, index) => {
            return <Card key={ index } icon={ item.icon } title={ item.title } text={ item.text } />
          })
        }
      </div>
    </div>
    <div className='bottom'>
      <div className='bottom__blockInput'>
        <input className='bottom__input' type='text' placeholder='Enter your email' />
        <Button title='Subscribe' styles='blue' />
      </div>
    </div>
  </main>
}