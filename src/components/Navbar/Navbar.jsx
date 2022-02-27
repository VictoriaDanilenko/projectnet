import React from "react";
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return <nav className={s.nav}>
        <div className={s.item}>
            <NavLink to='/profile' style ={({ isActive}) => ({color: isActive ? '#F9BC2D' :  '#FFFFFF'})}>Profile</NavLink>
        </div>

        <div className={s.item}>
            <NavLink to='/dialogs' style ={({ isActive}) => ({color: isActive ? '#F9BC2D' :  '#FFFFFF'})}>Messages</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to='/news' style ={({ isActive}) => ({color: isActive ? '#F9BC2D' :  '#FFFFFF'})}>News</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to='/music' style ={({ isActive}) => ({color: isActive ? '#F9BC2D' :  '#FFFFFF'})}>Music</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to='/settings' style ={({ isActive}) => ({color: isActive ? '#F9BC2D' :  '#FFFFFF'})}>Settings</NavLink>
        </div>
    </nav>
}

export default Navbar;