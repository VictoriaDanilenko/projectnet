import React from "react";
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return <nav className={s.nav}>
        <div className={s.item}>
            <NavLink to='/profile' style ={({ isActive}) => ({color: isActive ? '' :  '#181818'})}>Profile</NavLink>
        </div>

        <div className={s.item}>
            <NavLink to='/dialogs' style ={({ isActive}) => ({color: isActive ? '#F9BC2D' :  '#181818'})}>Messages</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to='/news' style ={({ isActive}) => ({color: isActive ? '#F9BC2D' :  '#181818'})}>News</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to='/music' style ={({ isActive}) => ({color: isActive ? '#F9BC2D' :  '#181818'})}>Music</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to='/settings' style ={({ isActive}) => ({color: isActive ? '#F9BC2D' :  '#181818'})}>Settings</NavLink>
        </div>
    </nav>
}

export default Navbar;