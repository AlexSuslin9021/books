import React, { ChangeEvent, useState } from 'react';
import s from '../search.module.css';
import { useAppDispatch } from "../../common/hooks/useAppDispatch";
import {setCategoryFilter} from "../search.slice";


export const Select = () => {
    const dispatch = useAppDispatch();
    const [selectedCategory, setSelectedCategory] = useState('all');
    const handleCategoryChange = (event: ChangeEvent<HTMLSelectElement>) => {
        const selectedValue = event.target.value;
        setSelectedCategory(selectedValue);
        dispatch(setCategoryFilter(selectedValue));

    };

    const handleSortChange = (event: ChangeEvent<HTMLSelectElement>) => {
        setSelectedSort(event.target.value);
    };

    const [selectedSort, setSelectedSort] = useState('relevance');
    return (
        <div className={s.selectContainer}>
            <label className={s.selectLabel} htmlFor="category">
                Категория:
            </label>
            <select
                className={s.select}
                id="category"
                value={selectedCategory}
                onChange={handleCategoryChange} // Добавьте обработчик onChange
            >
                <option value="All">Все</option>
                <option value="Art">Искусство</option>
                <option value="Biography">Биографии</option>
                <option value="Computers">Компьютеры</option>
                <option value="History">История</option>
                <option value="Medical">Медицина</option>
                <option value="Poetry">Поэзия</option>
            </select>

            <label htmlFor="sort">Сортировка:</label>
            <select
                className={s.select}
                id="sort"
                value={selectedSort}
                onChange={handleSortChange}
            >
                <option value="relevance">Relevance</option>
                <option value="newest">Newest</option>
            </select>
        </div>
    );
};


