import { createAsyncThunk } from "@reduxjs/toolkit";
import {
    getProductInfo,
    getReview,
    getInquire,
    postWriteInquire,
    ReqPostWriteInquire,
} from "../../utils/api";

export const getProduct = createAsyncThunk(
    "product/getInfo",
    async (id: string) => {
        return await getProductInfo(id);
    }
);

export const getReviews = createAsyncThunk(
    "product/getReview",
    async (id: string) => {
        return await getReview(id);
    }
);

export const getInquires = createAsyncThunk(
    "product/inquire",
    async (id: string) => {
        return await getInquire(id);
    }
);

export const writeInquire = createAsyncThunk(
    "product/writeInquire",
    async (data: ReqPostWriteInquire) => {
        return await postWriteInquire(data);
    }
);
