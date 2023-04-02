import { createSlice } from "@reduxjs/toolkit";

// type
import { RootState } from "..";

export type Address = {
    default: boolean;
    selected: boolean;
    value: string;
    placeToPut: string;
    doorPassword: string;
    phoneNumber: string;
    receiver: string;
};

export type UserInfoType = {
    id: string;
    name: string;
    phone: string;
    email: string;
    payment: string;
    address: Array<Address> | Address;
};

export const initialState: UserInfoType = {
    id: "",
    name: "",
    phone: "",
    email: "",
    address: [],
    payment: "",
};

export const userInfoSlice = createSlice({
    name: "userInfo",
    initialState,
    reducers: {
        setPayment: (state, action) => {
            state.payment = action.payload;
        },
        setLoginInfo: (state, action) => {
            state = { ...state, ...action.payload };
        },
    },
});

// export actions
export const { setPayment, setLoginInfo } = userInfoSlice.actions;

// export states
export const userInfoState = (state: RootState) => state.userInfoState;
