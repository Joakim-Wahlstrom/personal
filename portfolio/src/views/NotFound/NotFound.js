import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './NotFound.css'
const NotFound = () => {

  useEffect(() => {
    document.title = 'Joakim Wahlström | 404'
  },[])

  return (
    <div className='not-found container'>
      <div className="text-white text-center">
        <h1 className='text-primary mb-1'>Not Found - 404</h1>
        <p>Ojdå, den här sidan verkar inte finnas än.</p>
        <p className='mb-1'>Men kontakta gärna mig så hjälper jag dig med det du letar efter</p>
        <Link to="/contact" className='btn btn-primary btn-sm'>Kontakta mig</Link>
      </div>
    </div>
  )
}

export default NotFound
