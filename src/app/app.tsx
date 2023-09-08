import React from 'react';
import s from './app.module.css'
import {Search} from "../search/search";
import {useAppSelector} from "../common/hooks/useAppSelector";
import {BookCard} from "../books/books";


function App() {
    const books = useAppSelector(state => state.books)

    return (
        <div className={s.app}>
            <Search/>
            <div className={s.bookContainer} >{books.items.length === 0 ? '' : books.items.map(b => <BookCard key={b.id}
                                                                                        id={b.id}
                                                                                        volumeInfo={b.volumeInfo}

            />

            )}

            </div>
        </div>
    );
}

export default App;
