import React, { ChangeEvent } from 'react';
import s from '../search.module.css';
import { useAppDispatch } from "../../common/hooks/useAppDispatch";
import {searchBooks, setSearchTerm} from "../search.slice";
import {useAppSelector} from "../../common/hooks/useAppSelector";



export const Input = () => {
    const dispatch = useAppDispatch();
   const searchTerm = useAppSelector(state => state.books.searchTerm)

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setSearchTerm(e.currentTarget.value));

    };

    const onClickHandler = () => {

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


