import { createSlice } from "@reduxjs/toolkit";

import {
    getInquires,
    getProduct,
    getReviews,
    writeInquire,
} from "../actions/product";

// type
import { RootState } from "..";

export type Product = {
    id: string;
    name: string;
    price: number;
    description: string;
    thumnailImgUrl: string;
    disCountRate: number;
    beforeDiscountPrice: number;
    packagingType: string;
    weight: string;
    countryOfOrigin: string;
    each: string;
    seller: string;
};

export type Reviews = {
    next: boolean | string;
    list: Array<{
        id: string;
        productId: string;
        name: string;
        author: string;
        content: string;
        imageUrl: string;
        createDate: string;
    }>;
    length: number;
    currentId: string;
    currentPage: number;
};

export type Inquire = {
    list: Array<{
        id: string;
        name: string;
        content: string;
        createDate: string;
        author: string;
        answered: boolean;
        answerContent: string;
    }>;
    currentPage: number;
};

export type ProductStateType = {
    product: Product;
    reviews: Reviews;
    inquire: Inquire;
    getReviewLoading: boolean;
    getProductLoading: boolean;
};

export const initialState: ProductStateType = {
    product: {
        id: "",
        name: "",
        price: 0,
        description: "",
        thumnailImgUrl: "",
        disCountRate: 0,
        beforeDiscountPrice: 0,
        packagingType: "",
        weight: "",
        countryOfOrigin: "",
        each: "",
        seller: "",
    },
    reviews: {
        next: false,
        list: [],
        length: 0,
        currentId: "",
        currentPage: 0,
    },
    inquire: {
        list: [],
        currentPage: 0,
    },
    getReviewLoading: false,
    getProductLoading: false,
};

export const productStateSlice = createSlice({
    name: "productState",
    initialState,
    reducers: {
        setReviewPage: (state, action) => {
            state.reviews.currentPage = action.payload;
        },
        setCurrentReviewId: (state, action) => {
            state.reviews.currentId = action.payload;
        },
        setInquirePage: (state, action) => {
            state.inquire.currentPage = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getReviews.pending, (state) => {
                state.getReviewLoading = true;
            })
            .addCase(getReviews.fulfilled, (state, action) => {
                state.getReviewLoading = false;
                state.reviews = {
                    ...state.reviews,
                    ...action.payload,
                };
            })
            .addCase(getReviews.rejected, (state) => {
                state.getReviewLoading = false;
            })
            .addCase(getProduct.pending, (state) => {
                state.getProductLoading = true;
            })
            .addCase(getProduct.fulfilled, (state, action) => {
                state.getProductLoading = false;
                state.product = action.payload;
            })
            .addCase(getProduct.rejected, (state) => {
                state.getProductLoading = false;
            })
            .addCase(getInquires.fulfilled, (state, action) => {
                state.inquire.list = action.payload.list;
            })
            .addCase(writeInquire.fulfilled, (state, action) => {
                state.inquire.list = [action.payload, ...state.inquire.list];
            });
    },
});

// export actions
export const { setReviewPage, setCurrentReviewId, setInquirePage } =
    productStateSlice.actions;

// export states
export const productState = (state: RootState) => state.productState;
