import React from 'react';
import './Work.css';

const Work = () => {
  return (
    <div className="work">
      <div className="top chunk">
        <div className="left"></div>
        <div className="center" data-aos="fade-up">
          <div className="ball"></div>  
          <div className="line"></div>
        </div>
        <div className="right">
          <div className="card" data-aos="fade-left">
            <h2 className='text-primary'>IT-KONSULT</h2>
            <p className='company'>EPN Sverige AB | 2020 - pågående</p>
            <p className='desc'>
              Blev anställd under pågående utbildning via EPN, har idag fullt ansvar för
              utbildningen jag tidigare deltog i samt andra utbildningar och 
              utvecklingsuppdrag. <br /> I arbetsuppgifterna ingår bland annat:
              <ul className='list'>
                <li>Hitta och förhandla om nya uppdrag.</li>
                <li>Planera och schemalägga kurser.</li>
                <li>Administrativt arbete i nära kontakt med uppdragsgivare för att justera utbildningsplaner, ta fram utbildningsmaterial, rätta och betygsätta uppgifter samt handleda elever och kollegor i deras arbete.</li>
                <li>Utvecklingsarbete inom IT och Webbutveckling.</li>
                <li>Uppdatera och lära mig nya tekniker för att alltid ha relevant kunskap</li>
              </ul>
            </p>
          </div>
        </div>
      </div>
      <div className="chunk">
        <div className="left">
        <div className="card" data-aos="fade-right" data-aos-offset="440">
            <h2 className='text-primary'>KRANFÖRARE</h2>
            <p className='company'>Aros Mobilkranar | 2017 - 2019</p>
            <p className='desc'>
              Körde lastbil, hanterade tunga maskiner, mobilkranar och tornkranar samt skötte service och underhåll på dessa
            </p>
          </div>
        </div>

        <div className="center" data-aos="fade-up" data-aos-offset="456">
          <div className="ball"></div>  
          <div className="line"></div>
        </div>
        <div className="left-small">
        <div className="card" data-aos="fade-left" data-aos-offset="440">
            <h2 className='text-primary'>KRANFÖRARE</h2>
            <p className='company'>Aros Mobilkranar | 2017 - 2019</p>
            <p className='desc'>
              Körde lastbil, hanterade tunga maskiner, mobilkranar och tornkranar samt skötte service och underhåll på dessa
            </p>
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
            <h2 className='text-primary'>EGEN FÖRETAGARE</h2>
            <p className='company'>Wahlströms Maskin & Alltjänst | 2020 - pågående</p>
            <p className='desc'>
            Bedrev verksamhet som enskild firma på heltid där jag hyrde ut mig själv att 
            köra kran, installera luftvärmepumpar samt diverse andra arbeten.
            Jag skötte all fakturering, gjorde bokslut och årsredovisning själv. 
            I arbetet hade jag kontakt med många olika uppdragsgivare, var med på 
            byggmöten och skötte upphandlingar och prissättning av mina tjänster.
            </p>
          </div>
        </div>
      </div>
      <div className="chunk">
        <div className="left">
        <div className="card" data-aos="fade-right" data-aos-offset="445">
            <h2 className='text-primary'>FACKLIGT FÖRTROENDEVALD</h2>
            <p className='company'>Edins Kranar | 2013 - 2014</p>
            <p className='desc'>
              Representerade företagets anställda i sakfrågor som löneförhandlingar, arbetstids- och 
              arbetsmiljöfrågor.
            </p>
          </div>
        </div>
        <div className="center" data-aos="fade-up" data-aos-offset="461">
          <div className="ball"></div>  
          <div className="line"></div>
        </div>
        <div className="left-small">
        <div className="card" data-aos="fade-left" data-aos-offset="445">
            <h2 className='text-primary'>FACKLIGT FÖRTROENDEVALD</h2>
            <p className='company'>Edins Kranar | 2013 - 2014</p>
            <p className='desc'>
              Representerade företagets anställda i sakfrågor som löneförhandlingar, arbetstids- och 
              arbetsmiljöfrågor.
            </p>
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
            <h2 className='text-primary'>KRANFÖRARE</h2>
            <p className='company'>Edins Kranar | 2007 - 2017</p>
            <p className='desc'>
              Körde lastbil, hanterade tunga maskiner, mobilkranar och tornkranar samt skötte service och underhåll på dessa
            </p>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Work;
