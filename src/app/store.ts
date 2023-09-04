import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";

import { TypedUseSelectorHook, useSelector } from "react-redux";


export const store = configureStore({
    reducer: {

    },
});
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;