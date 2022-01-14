import Banner from '../../components/banner/Banner'
import './About.css'
import Me from './aboutme/Me'
import Hero from './Hero'
import Info from './info/Info'
import Skills from './skills/Skills'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'

const About = ({offsetY}) => {

  useEffect(() => {
    document.title = 'Joakim Wahlström | Om Mig'
  },[])

  return (
    <div className="about">
      <div className="container" style={{transform: `translateY(${offsetY * 0.12}px)`}}>
        <Hero />
      </div>
      <Banner>
        <div className="container">
          <h1 className="text-primary text-center">OM MIG</h1>
        </div>
      </Banner>
      <div className='container' style={{transform: `translateY(${offsetY * 0.1}px)`}}>
        <Me offsetY={offsetY} />
      </div>
      <Banner>
        <div className="container">
          <Info />
        </div>
      </Banner>
      <div className="container" style={{transform: `translateY(${offsetY * 0.1}px)`}}>
        <Skills />
      </div>
      <Banner>
        <div className="container text-center padding-block-3">
          <h2 className='text-primary mb-1 fs-200'>Kontakt</h2>
          <p className='text-white mb-1 fs-150'>Behöver ni hjälp med ett projekt eller söker ni någon som kan leda erat arbete framåt?</p>
          <Link className="btn btn-primary btn-sm" to="/contact">kontakta mig</Link>
        </div>
      </Banner>
    </div>
  )
}

export default About
