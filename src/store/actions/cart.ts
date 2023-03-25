import { createAsyncThunk } from "@reduxjs/toolkit";
import { getCart } from "../../utils/api";

export const getCartList = createAsyncThunk("cart/getList", async () => {
    return await getCart();
});
