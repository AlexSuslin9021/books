import React from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import { useAppSelector } from '../common/hooks/useAppSelector';
import {BookCard} from "./books";
import s from './books.module.css'


export const BookPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate= useNavigate()
    const onClickButton=()=>{
        navigate('/')
    }
    const book = useAppSelector(state =>
        state.books.items.find(item => item.id === id)
    );

    if (!book) {

        return <div>Книга не найдена</div>;
    }

    return (
        <div>
            <button className={s.button} onClick={onClickButton}>← Вернуться назад</button>
            <h1>Детальная информация о книге</h1>
            <BookCard id={book.id} volumeInfo={book.volumeInfo} />
        </div>
    );
};


