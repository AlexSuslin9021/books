import React, {ChangeEvent, useState} from 'react';
import s from '../search.module.css'

export const Select = () => {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const handleCategoryChange = (event: ChangeEvent<HTMLSelectElement>) => {
        setSelectedCategory(event.target.value);
    };
    const handleSortChange = (event:ChangeEvent<HTMLSelectElement>) => {
        setSelectedSort(event.target.value);
    };
    const [selectedSort, setSelectedSort] = useState('relevance');
    return (<div className={s.selectContainer}>
            <label className={s.selectLabel} htmlFor="category"> Категория:</label>
            <select  className={s.select} id="category" value={selectedCategory} onChange={handleCategoryChange}>
                <option value="all">Все</option>
                <option value="art">Искусство</option>
                <option value="biography">Биографии</option>
                <option value="computers">Компьютеры</option>
                <option value="history">История</option>
                <option value="medical">Медицина</option>
                <option value="poetry">Поэзия</option>
            </select>

            <label htmlFor="sort">Сортировка:</label>
            <select className={s.select} id="sort" value={selectedSort} onChange={handleSortChange}>
                <option value="relevance">Relevance</option>
                <option value="newest">Newest</option>
            </select>
        </div>

    );
};

