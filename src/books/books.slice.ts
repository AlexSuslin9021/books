import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {BookCardType} from "./books";
import {createAppAsyncThunk} from "../common/utils/createAppAsyncThunk";
import {thunkTryCatch} from "../common/utils/thunkTryCatch";


const initialState: BookCardType[] = []

const slice = createSlice({
    name: "books",
    initialState: initialState,
    reducers: {

    },
});

export const sada = createAppAsyncThunk(
    "books/searchBooks",
    async (arg: any, thunkAPI) => {
        return thunkTryCatch(thunkAPI, async () => {

            // let res = await apiCards.getCards(params);
            // return res.data;
        });
    }
);