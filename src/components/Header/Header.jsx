import React from 'react'
import './Header.css'
import Logo from '../../assets/logo_10.png'
import { Link } from 'react-scroll'

const Header = () => {
  return (
    <div className="header">

        <img src={Logo} alt="" className='logo'/>

        <ul className='header-menu'>
            <li onClick>
              <Link
                to="Header"
                span={true}
                smooth={true}
              >Home</Link>
            </li>
            <li>Programs</li>
            <li onClick>
              <Link
              to="Reasons"
              span={true}
              smooth={true}
              >Why Us</Link></li>
        </ul>
    </div>
  )
}

export default Header