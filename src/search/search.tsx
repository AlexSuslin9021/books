import React from 'react';
import s from './search.module.css'
import {Input} from "./input/input";
import {Select} from "./select/select";


export const Search = () => {

    return (
        <header className={s.search}>
            <Input/>
            <Select/>

        </header>
    );
};

