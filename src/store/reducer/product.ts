import { createSlice } from "@reduxjs/toolkit";

// type
import { RootState } from "..";

export type ProductStateType = {
    id: string;
    name: string;
    price: number;
    describe: string;
    thumnailImgUrl: string;
    disCountRate: number;
    beforeDiscountPrice: number;
    packagingType: string;
    weight: string;
    countryOfOrigin: string;
    each: string;
    seller: string;
};

export const initialState: ProductStateType = {
    id: "",
    name: "",
    price: 0,
    describe: "",
    thumnailImgUrl: "",
    disCountRate: 0,
    beforeDiscountPrice: 0,
    packagingType: "",
    weight: "",
    countryOfOrigin: "",
    each: "",
    seller: "",
};

export const productStateSlice = createSlice({
    name: "productState",
    initialState,
    reducers: {
        setProduct: (state, action) => {
            state = action.payload;
        },
    },
});

// export actions
export const { setProduct } = productStateSlice.actions;

// export states
export const productState = (state: RootState) => state.productState;
