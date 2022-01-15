import { useState, useEffect } from 'react'
import './Navbar.css'
import Logotype from '../../components/logotype/Logotype';
import PrimaryNav from './PrimaryNav';
import { CSSTransition } from 'react-transition-group'

const Navbar = ({hasScrolled}) => {

  useEffect(() => {
    if(window.innerWidth > 768)
      setIsMobile(false)
    else
      setIsMobile(true)
  },[])

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  },[])

  const handleResize = () => {
    if(window.innerWidth <= 768 && !isMobile) {
      setOpenMenu(false)
      setIsMobile(true)
    }
    else if(window.innerWidth >= 768) {
      // setOpenMenu(true)
      setIsMobile(false)
    }
  }

  const handleClick = e => {
    if(e.target.id === 'navbar-wrapper'){
      setOpenMenu(false)
    }
  }

  const [openMenu, setOpenMenu] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  return (

      <div className="navbar flex">
        <Logotype />

        <button aria-controls='primary-navigation' aria-expanded="false" aria-label='navigation-toggle' className='nav-toggle'
        onClick={() => setOpenMenu(!openMenu)}>
          <span className="sr-only">Menu</span>
          { !openMenu && <i className="fas fa-bars"></i> }
          { openMenu && <i className="fas fa-times"></i> }
        </button>

          {isMobile &&
            <>
              <CSSTransition in={openMenu} timeout={500} classNames="menu-primary" unmountOnExit>
                <PrimaryNav />
              </CSSTransition>
              {openMenu && <div className="outer-area" onClick={() => setOpenMenu(false)}></div> }
              
            </>
          }

          {!isMobile && <PrimaryNav hasScrolled={hasScrolled} />}

      </div>

  )
}

export default Navbar
