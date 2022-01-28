import { NavLink } from "react-router-dom"

const PrimaryNav = ({hasScrolled, closeMenu}) => {
  return (
      <ul id="primary-navigation" className={"primary-navigation flex " + (hasScrolled ? 'small' : 'big')}>
        <li>
          <NavLink to="/" className='nav-link' onClick={closeMenu} >OM MIG</NavLink>
        </li>
        <li>
          <NavLink to="/timeline" className='nav-link' onClick={closeMenu} >TIDSLINJE</NavLink>
        </li>
        <li>
          <NavLink to="/portfolio" className='nav-link' onClick={closeMenu} >PORTFOLIO</NavLink>
        </li>
        <li>
          <NavLink to="/contact" className='nav-link ' onClick={closeMenu} >KONTAKT</NavLink>
        </li>
      </ul>
  )
}

export default PrimaryNav
