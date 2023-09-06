import React, {FC} from 'react';
import s from './BookCard.module.css';

export const BookCard:FC<BookCardType> = ({ coverImage, title, category, authors }) => {

    return (
        <div className={s.bookCard}>
            <img src={coverImage} alt={title} className={s.coverImage} />

            <div className={s.bookInfo}>
                <h2 className={s.title}>{title || 'Название не указано'}</h2>
                <p className={s.category}>{category ? `Категория: ${category}` : 'Категория не указана'}</p>
                <p className={s.authors}>
                    {authors && authors.length > 0
                        ? `Авторы: ${authors.join(', ')}`
                        : 'Авторы не указаны'}
                </p>
            </div>
        </div>
    );
};

export type BookCardType = {
    coverImage: string,
    title: string,
    category: string,
    authors: string[],
};


