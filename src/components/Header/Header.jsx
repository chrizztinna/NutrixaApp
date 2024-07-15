import React, { useState } from 'react'
import './Header.css'
import Logo from '../../assets/logo_10.png'
import Bars from '../../assets/bar.png'
import { Link } from 'react-scroll'

const Header = () => {
  const mobile = window.innerWidth<= 768 ? true : false;
  const [menuOpened, setMenuOpened] = useState(false);
  
  return (
    <div className="header">

        <img src={Logo} alt="" className='logo'/>

        {(menuOpened === false && mobile === true)?(
          <div
          onClick={()=> setMenuOpened(true)}
          >
            <img src={Bars} alt="" style={{width: "1.5rem", height: "1.5rem"}}/></div>
        ):  (
          <ul className='header-menu'>
             <li >
              <Link
               onClick={()=>setMenuOpened(false)}
               to= "home"
               span={true}
               smooth={true}
               
              >Home 
              </Link>

             </li>

             <li >
              <Link
               onClick={()=>setMenuOpened(false)}
               to= "programs"
               span={true}
               smooth={true}
               
              >Programs 
              </Link>

             </li>
             <li ><Link
              onClick={()=>setMenuOpened(false)}
              to= "Reasons"
              span={true}
              smooth={true}
           
             >Why Us</Link></li>
          </ul>
        )}
    </div>
  );
};

export default Header