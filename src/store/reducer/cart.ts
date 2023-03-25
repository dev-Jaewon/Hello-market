import { createSlice } from "@reduxjs/toolkit";
import { Product } from "./product";
import { RootState } from "..";
import { getCartList } from "../actions/cart";

export type CartItem = Product & {
    quantity: number;
    checked: boolean;
};

export type CartStateType = {
    list: Array<CartItem>;
};

export const initialState: CartStateType = {
    list: [],
};

export const cartStateSlice = createSlice({
    name: "cartState",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getCartList.fulfilled, (state, action) => {
            state.list.push(...action.payload.list);
        });
    },
});

// export actions
export const {} = cartStateSlice.actions;

// export states
export const cartState = (state: RootState) => state.cartState;
