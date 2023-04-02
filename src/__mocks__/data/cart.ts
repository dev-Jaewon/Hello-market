import { faker as f } from "@faker-js/faker/locale/ko";
import { CartItem } from "../../store/reducer/cart";
import { product } from "../data/product";

export const cartMock = (): CartItem => {
    return {
        ...product(f.datatype.uuid()),
        quantity: Number(f.random.numeric(1)),
        checked: Math.random() < 0.5,
    };
};

export const getCartMock = () => {
    return { list: [...Array(10)].map((_) => cartMock()) };
};

export const getTrueCheckedProduct = {
    list: [...Array(10)].map((_) => {
        return { ...cartMock(), checked: true };
    }),
};
