import { createAsyncThunk } from "@reduxjs/toolkit";
import { deleteCartItem, getCart } from "../../utils/api";

export const getCartList = createAsyncThunk("cart/getList", async () => {
    return await getCart();
});

export const deleteCart = createAsyncThunk(
    "cart/deleteItem",
    async (id: string) => {
        return await deleteCartItem(id);
    }
);
