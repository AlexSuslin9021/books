import React from 'react';
import s from './search.module.css'
import {Input} from "./Input/input";
export const Search = () => {
    return (
        <header className={s.search}>
            <Input/>
        </header>
    );
};

