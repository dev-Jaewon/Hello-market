import axios, { AxiosError } from "axios";
import { CartStateType } from "../store/reducer/cart";
import { Inquire, Product } from "../store/reducer/product";
import { ResKakaoPaymentApprove, ResKakaoPaymentReady } from "../types/kakao";
import { ReqPaymentReady } from "../types/payment";

const api = axios.create({
    baseURL:
        "https://8q93p22bz4.execute-api.ap-northeast-2.amazonaws.com/hello-market",
    headers: {
        "Content-Type": "application/json",
    },
});

export const postCheckInfo = async (info: { [key: string]: string }) => {
    try {
        return await api.post("/check/id", info);
    } catch (error) {
        throw error as AxiosError;
    }
};

export type SignupType = {
    id: string;
    password: string;
    passwordRe: string;
    email: string;
    name: string;
    phone: string;
};
export const postSignup = async (info: SignupType) => {
    try {
        return await api.post("/signup", info);
    } catch (error) {
        throw error;
    }
};

export type ResProductInfo = { result: Product };
export const getProductInfo = async (id: string) => {
    try {
        const res = await api.get<ResProductInfo>(`/product/${id}`);
        return res.data.result;
    } catch (error) {
        throw error;
    }
};

export type ResGetReview = { result: Inquire["list"][0] };
export const getReview = async (id: string) => {
    try {
        const res = await api.get<ResGetReview>(`/review/${id}`);
        return res.data.result;
    } catch (error) {
        throw error;
    }
};

export type ResGetInquire = { result: Inquire };
export const getInquire = async (id: string) => {
    try {
        const res = await api.get<ResGetInquire>(`/inquire/${id}`);
        return res.data.result;
    } catch (error) {
        throw error;
    }
};

export type ReqPostWriteInquire = { name: string; content: string };
export type ResPostInquire = { result: Inquire["list"][0] };
export const postWriteInquire = async (data: ReqPostWriteInquire) => {
    try {
        const res = await api.post<ResPostInquire>(`/inquire`, data);
        return res.data.result;
    } catch (error) {
        throw error;
    }
};

export type ResGetCart = { result: CartStateType };
export const getCart = async () => {
    try {
        const res = await api.get<ResGetCart>("/cart");
        return res.data.result;
    } catch (error) {
        throw error;
    }
};

export type ResDeleteCartItem = { result: boolean; id: string };
export const deleteCartItem = async (id: string) => {
    try {
        await api.delete<ResDeleteCartItem>(`/cart/${id}`);
        return id;
    } catch (error) {
        throw error;
    }
};

export const postPayment = async (data: ReqPaymentReady) => {
    try {
        return await api.post<ResKakaoPaymentReady>("/payment", data);
    } catch (error) {
        throw error;
    }
};

export type ReqPostPaymentApprove = { tid: string; pg_token: string };
export const postPaymentApprove = async (data: ReqPostPaymentApprove) => {
    try {
        const postData = { ...data };

        return await api.post<ResKakaoPaymentApprove>("/payment/approve", data);
    } catch (error) {
        throw error;
    }
};

export type ResSignIn = {
    message: {
        id: string;
        name: string;
        email: string;
        phone: string;
    };
};
export const postSignIn = async (info: { id: string; password: string }) => {
    try {
        return await api.post<ResSignIn>("/signin", { ...info });
    } catch (error) {
        throw error;
    }
};
