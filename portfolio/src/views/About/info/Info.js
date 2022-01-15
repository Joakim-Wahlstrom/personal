import family from '../../../assets/img/family2.png'
import './Info.css'
const Info = () => {
  return (
    <div className='info flex'>
      <div className="info-text">
        <p className="text-white text-line">
          <i className="icon fas fa-home text-primary"></i>
          <span>Fläckebogatan 12, 723 43 Västerås</span>
        </p>
        <p className="text-white text-line">
          <i className="icon fas fa-phone-alt text-primary"></i>
          <span>+46 701 469 796</span>
        </p>
        <p className="text-white text-line">
          <i className="icon fas fa-envelope text-primary"></i>
          <span>wahlstrom.joakim@gmail.com</span>
        </p>
        <p className="text-white text-line">
          <i className="icon fas fa-calendar-alt text-primary"></i>
          <span>1987-01-17</span>
        </p>
      </div>
      <div className="img-container">
        <img src={family} alt="" className='img-fluid' />
      </div>
    </div>
  )
}

export default Info
