import './styles.scss'

export const Card = ({ icon, title, text }) => {
  return <div className='card'>
    <div className='card__cardIcon'>
      <img className='card__img' src={`/static/img/${icon}.svg`} alt=""/>
    </div>
    <h3 className='card__title'>{ title }</h3>
    <p className='card__p'>{ text }</p>
  </div>
}