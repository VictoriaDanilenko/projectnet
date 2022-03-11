import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from 'react-router-dom';



const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + ' ' + s.active}>
                    <NavLink to='/dialogs/1'>Victoria</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/2'>Alexander</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/3'>Sergo</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/4'>Tamara</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/5'>Alexey</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/6'>Dimych</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/7'>Nicole</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/8'>German</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/9'>Glasha</NavLink>
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.dialog}>Hello friends! How are you!</div>
                <div className={s.dialog}>Nice to see you here! I am super fine! YO-YO!</div>
                <div className={s.dialog}>Ha-ha-ha-haaaa))))</div>
                <div className={s.dialog}>Hello my lovely friends!</div>
                <div className={s.dialog}>Good morning!</div>
            </div>
        </div>
    )
}

export default Dialogs;

