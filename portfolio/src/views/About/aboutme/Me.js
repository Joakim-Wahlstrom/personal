import { useEffect, useState } from 'react'
import './Me.css'
const Me = ({offsetY}) => {

  const [myAge, setMyAge] = useState(0)

  useEffect(() => {
    const calculateAge = (y, m, d) => {
      m--
      let birth = new Date(y, m, d);
      let diff = Date.now() - birth;
      let age = new Date(diff).getFullYear() - 1970;
      return age;
    }
    
    setMyAge(calculateAge(1987,1,17))
  }, [])

  return (
    <div className="me flex">
      <div className="me-text">
        <p className="text-white">
          Jag är en målmedveten kille på {myAge} år som bor inne i västerås med min fru och våra barn.
          Dom senaste åren har jag jobbat som IT-konsult och utbildare inom IT, UX design och Agila arbetsmetoder så som Scrum och Kanban.
          Jag är en person som ser lösningar framför problem och har ett pedagogiskt sätt att förmedla information och hjälpa andra att utvecklas
        </p>
      </div>
      <div className="me-boxes">
        <div className="box top-box" style={{transform: `translateY(${offsetY * 0.03}px)`}}></div>
        <div className="box bot-box" style={{transform: `translateY(${offsetY * -0.03}px)`}}></div>
      </div>
    </div>
  )
}

export default Me
