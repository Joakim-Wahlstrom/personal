import { NavLink } from "react-router-dom"

const PrimaryNav = ({hasScrolled}) => {
  return (
    <ul id="primary-navigation" className={"primary-navigation flex " + (hasScrolled ? 'small' : 'big')}>
      <li>
        <NavLink to="/" className='nav-link'>OM MIG</NavLink>
      </li>
      <li>
        <NavLink to="/timeline" className='nav-link'>TIDSLINJE</NavLink>
      </li>
      <li>
        <NavLink to="/portfolio" className='nav-link'>PORTFOLIO</NavLink>
      </li>
      <li>
        <NavLink to="/contact" className='nav-link '>KONTAKT</NavLink>
      </li>
    </ul>
  )
}

export default PrimaryNav
