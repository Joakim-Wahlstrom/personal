import { NavLink } from "react-router-dom"

const SmallNav = () => {
  return (
<ul id="small-navigation" className="small-navigation flex">
      
      <li>
        <NavLink to="/contact" className='nav-link'>KONTAKT</NavLink>
      </li>
    </ul>
  )
}

export default SmallNav
