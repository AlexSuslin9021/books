import React, { FC } from 'react';
import s from './books.module.css';
import { useNavigate, useLocation } from "react-router-dom";


export const BookCard: FC<BookCardType> = ({ id, volumeInfo }) => {
    const navigate = useNavigate();
    const location = useLocation();

    const onClickBook = () => {
        navigate(`/book/${id}`);
    }

    const isBookPage = location.pathname.startsWith('/book/');

    return (
        <div className={s.bookCard} onClick={onClickBook}>
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
                {isBookPage && (
                    <p className={s.description}>
                        {volumeInfo.description || 'Описание не доступно'}
                    </p>
                )}
            </div>
        </div>
    );
};

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
        categories: string[];
    };
};


