import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {createAppAsyncThunk} from "../common/utils/createAppAsyncThunk";
import {thunkTryCatch} from "../common/utils/thunkTryCatch";
import {BookCardType} from "../books/books";
import axios from "axios";

const initialState: initialStateType = {} as initialStateType;

const slice = createSlice({
    name: "search",
    initialState: initialState,
    reducers: {},
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
            console.log(res.data)
            return res.data;
        });
    }
);


export const books = slice.reducer;
type initialStateType={
    items:BookCardType[]
}