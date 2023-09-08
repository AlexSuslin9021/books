import React, { ChangeEvent, useState } from 'react';
import s from '../search.module.css';
import { useAppDispatch } from "../../common/hooks/useAppDispatch";
import {searchBooks} from "../search.slice";


export const Input = () => {
    const dispatch = useAppDispatch();
    const [searchTerm, setSearchTerm] = useState(''); // Храним значение поля ввода в локальном состоянии

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.currentTarget.value);
    };

    const onClickHandler = () => {
        console.log(searchTerm)
        dispatch(searchBooks(searchTerm));
    };
    const onKeyPressHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            dispatch(searchBooks(searchTerm));
        }
    };

    return (
        <div>
            <input
                onChange={onChange}
                className={s.input}
                type="text"
                value={searchTerm}
                placeholder="Введите запрос"
                onKeyPress={onKeyPressHandler}
            />
            <button onClick={onClickHandler} className={s.button}>
                Поиск
            </button>
        </div>
    );
};


