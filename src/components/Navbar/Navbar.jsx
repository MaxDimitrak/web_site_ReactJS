import React from 'react';
import s from './Navbar.module.css'
import { NavLink, Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <div className={s.navbar}>
      <NavLink to='/general' activeClassName={s.activeLink}><span className={s.itemNavbar}>ГЛАВНАЯ</span></NavLink>
      <NavLink to='/about-company' activeClassName={s.activeLink}><span className={s.itemNavbar}>О НАС</span></NavLink>
      <NavLink to='/portfolio' activeClassName={s.activeLink}><span className={s.itemNavbar}>ПОРТФОЛИО</span></NavLink>
      <NavLink to='/reviews' activeClassName={s.activeLink}><span className={s.itemNavbar}>ОТЗЫВЫ</span></NavLink>
      <NavLink to='/price' activeClassName={s.activeLink}><span className={s.itemNavbar}>УСЛУГИ И ЦЕНЫ</span></NavLink>
      <NavLink to='/craftframe-shop' activeClassName={s.activeLink}><span className={s.itemNavbar}>CRAFTFRAME SHOP</span></NavLink>
      <NavLink to='/discount' activeClassName={s.activeLink}><span className={s.itemNavbar}>КАК ПОЛУЧИТЬ СКИДКУ</span></NavLink>
      <NavLink to='/articles' activeClassName={s.activeLink}><span className={s.itemNavbar}>СТАТЬИ</span></NavLink>
      <NavLink to='/leave-a-request' activeClassName={s.activeLink}><span className={s.itemNavbar}>ОСТАВИТЬ ЗАЯВКУ</span></NavLink>
    </div>
  );
};

export default Navbar;