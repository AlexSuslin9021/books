import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {createAppAsyncThunk} from "../common/utils/createAppAsyncThunk";
import {thunkTryCatch} from "../common/utils/thunkTryCatch";
// import {BookCardType} from "../books/books";
import axios from "axios";
const initialState: initialStateType = {
    items: [],
    searchTerm: '',
} as initialStateType;


const slice = createSlice({
    name: "search",
    initialState: initialState,
    reducers: {

        setSearchTerm(state, action: PayloadAction<string>){
            state.searchTerm=action.payload

        },
        setCategoryFilter(state, action: PayloadAction<string>) {
            state.items = state.items.filter(book => {

                return book.volumeInfo.categories && book.volumeInfo.categories.includes(action.payload);
            });

        },
    },
    extraReducers: (builder) => {
        builder.addCase(searchBooks.fulfilled, (state, action:PayloadAction<initialStateType>) => {
            state.items=action.payload.items

        });
    }
});

export const searchBooks = createAppAsyncThunk(
    "books/searchBooks",
    async (arg: string, thunkAPI) => {
        console.log(`searchBooks`)
        return thunkTryCatch(thunkAPI, async () => {
            let res = await axios.get(
                `https://www.googleapis.com/books/v1/volumes?q=${arg}`
            );

            return res.data;
        });
    }
);


export const books = slice.reducer;
export const setCategoryFilter = slice.actions.setCategoryFilter;
export const setSearchTerm = slice.actions.setSearchTerm;
type initialStateType={
    items:BookCardType[]
    searchTerm:string
}

type BookCardType = {
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