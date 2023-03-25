import axios from "axios";
import { CartStateType } from "../store/reducer/cart";
import { Inquire, Product } from "../store/reducer/product";

// axios.defaults.baseURL = process.env.

export type GetProductInfo = { result: Product };
export const getProductInfo = async (id: string) => {
    try {
        const res = await axios.get<GetProductInfo>(`/product/${id}`);
        return res.data.result;
    } catch (error) {
        throw error;
    }
};

export type resGetReview = { result: Inquire["list"][0] };
export const getReview = async (id: string) => {
    try {
        const res = await axios.get<resGetReview>(`/review/${id}`);
        return res.data.result;
    } catch (error) {
        throw error;
    }
};

export type getInquire = { result: Inquire };
export const getInquire = async (id: string) => {
    try {
        const res = await axios.get<getInquire>(`/inquire/${id}`);
        return res.data.result;
    } catch (error) {
        throw error;
    }
};

export type ReqPostWriteInquire = { name: string; content: string };
export type resPostInquire = { result: Inquire["list"][0] };
export const postWriteInquire = async (data: ReqPostWriteInquire) => {
    try {
        const res = await axios.post<resPostInquire>(`/inquire`, data);
        return res.data.result;
    } catch (error) {
        throw error;
    }
};

export type resGetCart = { result: CartStateType };
export const getCart = async () => {
    try {
        const res = await axios.get<resGetCart>("/cart");
        return res.data.result;
    } catch (error) {
        throw error;
    }
};
