import React from 'react';

const Education = () => {
  return (
    <div className="education">
      <div className="top chunk">
        <div className="left"></div>
        <div className="center" data-aos="fade-up" data-aos-offset="461">
          <div className="ball"></div>  
          <div className="line"></div>
        </div>
        <div className="right">
          <div className="card" data-aos="fade-left" data-aos-offset="445">
            <h2 className='text-primary'>FRONT END</h2>
            <p className='company'>EC-Utbildning | 2019 - 2021</p>
            <p className='desc'>
              YH-Utbildning med fokus på frontendutveckling med JavaScript och olika JS ramverk som React och Vue samt backend med Node.js.
              Tog examen med högsta betyg i alla kurser
            </p>
          </div>
        </div>
      </div>
      <div className="chunk">
        <div className="left">
          <div className="card" data-aos="fade-right" data-aos-offset="445">
            <h2 className='text-primary'>GRUNDERNA I DIGITAL MARKNADSFÖRING</h2>
            <p className='company'>Google Digitalakademin | 2020</p>
            <p className='desc'>
              Online utbildning med certifiering i grunderna i digital marknadsföring
            </p>
            <p className='desc-small'>certifikat id: <span className="text-primary">BZJ 47K UMY</span></p>
          </div>
        </div>
        <div className="center" data-aos="fade-up" data-aos-offset="461">
          <div className="ball"></div>  
          <div className="line"></div>
        </div>
        <div className="left-small">
          <div className="card" data-aos="fade-left">
            <h2 className='text-primary'>GRUNDERNA I DIGITAL MARKNADSFÖRING</h2>
            <p className='company'>Google Digitalakademin | 2020</p>
            <p className='desc'>
              Online utbildning med certifiering i grunderna i digital marknadsföring
            </p>
            <p className='desc-small'>certifikat id: <span className="text-primary">BZJ 47K UMY</span></p>
          </div>
        </div>
        <div className="right">
        </div>
      </div>
      <div className="chunk">
        <div className="left"></div>
        <div className="center" data-aos="fade-up" data-aos-offset="461">
          <div className="ball"></div>  
          <div className="line"></div>
        </div>
        <div className="right">
          <div className="card" data-aos="fade-left" data-aos-offset="445">
            <h2 className='text-primary'>SPECIALUTFORMAT PROGRAM IT-ELEKTRONIK-NATURVETENSKAP</h2>
            <p className='company'>IT-Gymnasiet | 2003 - 2006</p>
            <p className='desc'>
              Gymnasialt program med inriktning på IT, Elektronik och Naturvetenskap
            </p>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Education;
