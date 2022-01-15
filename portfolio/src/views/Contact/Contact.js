import { useEffect } from 'react'

const Contact = () => {
  useEffect(() => {
    document.title = 'Joakim Wahlström | Kontakt'
  },[])

  return (
    <div className='contact container text-white padding-block-3'>
      <h1 className='text-center text-primary fs-300'>Kontakt</h1>
    </div>
  )
}

export default Contact
