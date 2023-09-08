import React from 'react';
import s from './app.module.css'
import { Search } from "../search/search";
import { useAppSelector } from "../common/hooks/useAppSelector";
import { BookCard } from "../books/books";
import { BookPage } from "../books/booksPage";
import { Route, Routes } from "react-router-dom";

function App() {
    const books = useAppSelector(state => state.books);

    return (
        <div className={s.app}>
            <Search />
            <Routes>
                <Route path={'/'} element={<div className={s.bookContainer}>{books.items.length === 0 ? '' : books.items.map(b =>
                    <BookCard key={b.id} id={b.id} volumeInfo={b.volumeInfo} />
                )}</div>} />
                <Route path="/book/:id" element={<BookPage />} />
            </Routes>
        </div>
    );
}

export default App;
