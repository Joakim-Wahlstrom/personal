import profile from '../../assets/img/Mebw.webp'
import smallProfile from '../../assets/img/Smallprofile2.webp'
import { Link } from 'react-router-dom'
// import { useStorage } from '../../hooks/useStorage'
const Hero = () => {

  // const {downloadUrl} = useStorage();

  return (
    <>
    <div className="hero flex">
      <div className="text-header text-white">
        <p>Hej,</p>
        <p>Jag heter <span className="text-primary">Joakim</span>.</p>
        <div className="buttons">
          <Link className="btn btn-primary" to="/contact">kontakta mig</Link>
          <a href="CV_Joakim_Wahlstrom.pdf" className="link-btn" download><i className="fas fa-download"></i> ladda ner cv</a>
        </div>
      </div>
      <div className="img-container">
        <img className="img-fluid" src={profile} alt="" />
      </div>
    </div>
    <div className="small-img-container">
      <img className="img-fluid" src={smallProfile} alt="" />
    </div>
    </>
  )
}

export default Hero
