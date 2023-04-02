import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "..";

export type PaymentProduct = {
    id: string;
    name: string;
    phoneNumber: string;
    thumnailImgUrl: string;
    price: number;
    quantity: number;
};

export type PaymentStateType = {
    orderId: string;
    address: string;
    quantity: number;
    totalAmount: number;
    products: Array<PaymentProduct>;
};

export const initialState: PaymentStateType = {
    orderId: "",
    address: "",
    quantity: 0,
    totalAmount: 0,
    products: [],
};

export const paymentStateSlice = createSlice({
    name: "paymentState",
    initialState,
    reducers: {},
    extraReducers: (builder) => {},
});

// export actions
export const {} = paymentStateSlice.actions;

// export states
export const paymentState = (state: RootState) => state.paymentState;
