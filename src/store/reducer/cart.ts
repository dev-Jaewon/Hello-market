import { createSlice } from "@reduxjs/toolkit";
import { Product } from "./product";
import { RootState } from "..";
import { deleteCart, getCartList } from "../actions/cart";

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
    reducers: {
        setQuantity: (state, action) => {
            state.list = action.payload;
        },
        setChecked: (state, action) => {
            state.list = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getCartList.fulfilled, (state, action) => {
                state.list.push(...action.payload.list);
            })
            .addCase(deleteCart.fulfilled, (state, action) => {
                state.list = state.list.filter(
                    (item) => item.id !== action.payload
                );
            });
    },
});

// export actions
export const { setQuantity, setChecked } = cartStateSlice.actions;

// export states
export const cartState = (state: RootState) => state.cartState;
