import React from 'react';
import logo from '../../components/Logo.png';
import s from './Header.module.css'
import { NavLink } from 'react-router-dom';
const Header = ()=>{
    return(
<header>
  <div className={s.header}>
   <div>
     <img src={logo}></img>
   <NavLink to='/leave-a-request' ><span>оставить заявку</span></NavLink>
     </div>
  </div>
</header>
    );
};

export default Header;