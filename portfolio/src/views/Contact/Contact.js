import { useEffect } from 'react'
import ContactCards from './contactCards/ContactCards'
import ContactForm from './contactForm/ContactForm'

const Contact = () => {
  useEffect(() => {
    document.title = 'Joakim Wahlström | Kontakt'
  },[])

  return (
    <div className='contact container text-white padding-block-3'>
      <h1 className='text-center text-primary fs-300'>KONTAKT</h1>
      <ContactCards />
      <p className="text-center margin-block-2">
        Tveka inte att skicka iväg ett meddelande om du har några frågor
      </p>
      <ContactForm />
    </div>
  )
}

export default Contact
