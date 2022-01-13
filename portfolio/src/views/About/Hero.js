import profile from '../../assets/img/Mebw.png'

const Hero = () => {
  return (
    <div className="flex">
      <div className="text-header">
        <h1 className="text-white">
          <p>Hej,</p>
          <p>Jag heter <span className="text-primary">Joakim</span>.</p>
        </h1>
        <div className="buttons">
          <button className="btn btn-primary">kontakta mig</button>
          <a href="Jw_logo.png" className="link-btn" download><i className="fas fa-download"></i> ladda ner cv</a>
        </div>
      </div>
      <div className="img-container">
        <img className="img-fluid" src={profile} alt="" />
      </div>
    </div>
  )
}

export default Hero
