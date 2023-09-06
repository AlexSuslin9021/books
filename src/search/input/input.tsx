import React from 'react';
import s from '../search.module.css'

export const Input = () => {
    return (<div>
            <input className={s.input} type={'text'}/>
            <button className={s.button}> Search</button>
        </div>

    );
};

