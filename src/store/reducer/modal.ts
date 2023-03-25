import { createSlice } from "@reduxjs/toolkit";

// type
import { RootState } from "..";

export type ModalStateType = {
    type: "question" | "notified" | "images" | "review" | null;
    content: string;
};

export const initialState: ModalStateType = {
    type: null,
    content: "",
};

export const modalStateSlice = createSlice({
    name: "modalState",
    initialState,
    reducers: {
        setOpenModal: (state, action) => {
            state.type = action.payload;
        },
        setContent: (state, action) => {
            state.content = action.payload;
        },
    },
});

// export actions
export const { setOpenModal, setContent } = modalStateSlice.actions;

// export states
export const modalState = (state: RootState) => state.modalState;
