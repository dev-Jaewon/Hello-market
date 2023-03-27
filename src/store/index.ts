import { combineReducers, configureStore } from "@reduxjs/toolkit";
import type { PreloadedState } from "@reduxjs/toolkit";

// slice
import { modalStateSlice } from "./reducer/modal";
import { productStateSlice } from "./reducer/product";
import { cartStateSlice } from "./reducer/cart";

const rootReducer = combineReducers({
    modalState: modalStateSlice.reducer,
    productState: productStateSlice.reducer,
    cartState: cartStateSlice.reducer,
});

export const setupStore = (preloadedState?: PreloadedState<RootState>) =>
    configureStore({
        reducer: rootReducer,
        preloadedState,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
    });

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
