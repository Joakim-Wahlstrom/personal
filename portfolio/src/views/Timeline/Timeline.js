import { useEffect, useState } from 'react';
import './Timeline.css'
import aos from 'aos'
import 'aos/dist/aos.css'
import Work from './Work/Work';
import Education from './Education/Education';

const Timeline = ({smallScroll}) => {

  const [work, setWork] = useState(true);
  const [education, setEducation] = useState(false);

  useEffect(() => {
    aos.init({
      duration: 1500,
    })
  }, [])

  return (
    <div className='timeline container text-white padding-block-3'>
      <h1 className='text-center text-primary fs-300'>TIDSLINJE</h1>

      <div className="tabs flex">
        <button className={"btn-tab " + (work ? 'active-tab': '')} onClick={() => {
          setWork(true)
          setEducation(false)
        }}>Arbete</button>
        <p>|</p>
        <button className={"btn-tab " + (education ? 'active-tab': '')} onClick={() => {
          setWork(false)
          setEducation(true)
        }}>Utbildning</button>
      </div>
      {work && <Work />}
      {education && <Education />}

      {!smallScroll && <i className="fas fa-angle-double-down text-primary"></i>}
      
    </div>
  )
};

export default Timeline;
