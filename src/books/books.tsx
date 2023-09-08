import React, { FC } from 'react';
import s from './books.module.css';
import {useNavigate} from "react-router-dom";

export type BookCardType = {
    id: string;
    volumeInfo: {
        title: string;
        infoLink: string;
        description: string;
        imageLinks: {
            smallThumbnail: string;
            thumbnail: string;
        };
        authors: string[];
        categories: string[]; // Исправлено на "categories"
    };
};

export const BookCard: FC<BookCardType> = ({ id, volumeInfo}) => {
   const navigate=useNavigate()
    const onClickBook = (id:string)=>{
        navigate(`/book/${id}`)
   }
    return (
        <div className={s.bookCard} onClick={()=>onClickBook(id)}>
            <img
                src={volumeInfo.imageLinks.smallThumbnail}
                alt={volumeInfo.title}
                className={s.coverImage}
            />

            <div className={s.bookInfo}>
                <h2 className={s.title}>{volumeInfo.title || 'Название не указано'}</h2>
                <p className={s.category}>
                    {volumeInfo.categories && volumeInfo.categories.length > 0
                        ? `Категория: ${volumeInfo.categories.join(', ')}`
                        : ''}
                </p>
                <p className={s.authors}>
                    {volumeInfo.authors && volumeInfo.authors.length > 0
                        ? `Авторы: ${volumeInfo.authors.join(', ')}`
                        : 'Авторы не указаны'}
                </p>

            </div>
        </div>
    );
};



