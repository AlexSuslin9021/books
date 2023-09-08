import React from 'react';
import { useParams } from 'react-router-dom';
import { useAppSelector } from '../common/hooks/useAppSelector';
import {BookCard} from "./books";


export const BookPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const book = useAppSelector(state =>
        state.books.items.find(item => item.id === id)
    );

    if (!book) {
        // Обработка случая, когда книга с указанным id не найдена
        return <div>Книга не найдена</div>;
    }

    return (
        <div>
            <h1>Детальная информация о книге</h1>
            <BookCard id={book.id} volumeInfo={book.volumeInfo} />
        </div>
    );
};


