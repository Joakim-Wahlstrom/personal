import './Skills.css'
import { useState } from 'react'
import List from './List'

const Skills = () => {

  const [leadership, setLeadership] = useState(true)
  const [development, setDevelopment] = useState(false)
  const [more, setMore] = useState(false)

  const handleClick = name => {
    switch(name) {
      case 'leadership':
        setLeadership(true)
        setDevelopment(false)
        setMore(false)
        break;
      case 'development':
        setLeadership(false)
        setDevelopment(true)
        setMore(false)
        break;
      case 'more':
        setLeadership(false)
        setDevelopment(false)
        setMore(true)
        break;
      default:
        break;
    }
  }

  return (
    <div className='skills'>
      <div className="tabs flex">
        <button className={"btn-tab " + (leadership ? 'active-tab': '')} onClick={() => handleClick('leadership')}>Ledare</button>
        <div className="tab-line"></div>
        <button className={"btn-tab " + (development ? 'active-tab': '')} onClick={() => handleClick('development')}>Utvecklare</button>
        <div className="tab-line"></div>
        <button className={"btn-tab " + (more ? 'active-tab': '')} onClick={() => handleClick('more')}>Övrigt</button>
      </div>
      <div className='mt'>
        {leadership && 
          <div className='skills-list-flex flex'>
            <List>
              <li>Kommunikation</li>
              <li>Coaching</li>
              <li>Strategisk planering</li>
              <li>Agila arbetsmetoder</li>
              <li>Leda på distans</li>
            </List>
            <List>
              <li>Ekonomistyrning</li>
              <li>Systematiskt miljöarbete</li>
            </List>
          </div>
        }
        {development &&
        <div className='skills-list-flex flex'>
          <List>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>Bootstrap</li>
            <li>JavaScript</li>
            <li>Node.js</li>
          </List>
          <List>
            <li>React</li>
            <li>Vue</li>
            <li>AdobeXD</li>
            <li>VisualStudio Code</li>
          </List>
        </div>
        }
        {more &&
          <div className='skills-list-flex flex'>
            <List>
              <li>UX och grafisk design</li>
              <li>Microsoft Word</li>
              <li>Microsoft Teams</li>
              <li>Lastbilskörkort</li>
              <li>Truckkort</li>
            </List>
            <List>
              <li>Digital marknadsföring</li>
            </List>
          </div>
        }
      </div>
    </div>
  )
}

export default Skills
