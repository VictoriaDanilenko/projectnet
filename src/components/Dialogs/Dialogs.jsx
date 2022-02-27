import React from 'react';
import s from './Dialogs.module.css'


const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + ' ' + s.active}>
                    Victoria
                </div>
                <div className={s.dialog}>
                    Alexander
                </div>
                <div className={s.dialog}>
                    Sergo
                </div>
                <div className={s.dialog}>
                    Tamara
                </div>
                <div className={s.dialog}>
                    Alexey
                </div>
                <div className={s.dialog}>
                    Dimych
                </div>
                <div className={s.dialog}>
                    Nicole
                </div>
                <div className={s.dialog}>
                    German
                </div>
                <div className={s.dialog}>
                    Natasha
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.dialog}>Hello friends! How are you!</div>
                <div className={s.dialog}>Nice to see you here! I am super fine! YO-YO!</div>
                <div className={s.dialog}>Ha-ha-ha-haaaa))))</div>
                <div className={s.dialog}>Hello!</div>
                <div className={s.dialog}>Good morning!</div>
            </div>
        </div>
    )
}

export default Dialogs;