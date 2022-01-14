import Banner from '../banner/Banner'
import './Footer.css'
import { useEffect, useState } from 'react'
const Footer = () => {

  const [year, setYear] = useState(2000)

  useEffect(() => {
    setYear(new Date().getFullYear())
  }, [])

  return (
    <div className='footer'>
      <Banner dark={true}>
        <div className="container flex padding-block-3">
          <div className="">
            <p>Copyright &copy; {year}</p>
            <p>Designat av mig och skapat med React</p>
          </div>
          <div className="links flex">
            <a className="ext-link facebook" href="https://www.facebook.com/joakim.wahlstrom.75" target="_blank"><i className="fab fa-facebook-f"></i></a>
            <a className="ext-link instagram" href="https://www.instagram.com/isedor/" target="_blank"><i className="fab fa-instagram"></i></a>
            <a className="ext-link linkedin" href="https://www.linkedin.com/in/joakim-wahlstr%C3%B6m-556302188/" target="_blank"><i className="fab fa-linkedin"></i></a>
          </div>
        </div>
      </Banner>
    </div>
  )
}

export default Footer
