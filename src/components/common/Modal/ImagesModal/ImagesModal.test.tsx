import { renderWithProviders } from "../../../../utils/test-utils";
import { ModalStateType } from "../../../../store/reducer/modal";
import { ImagesModal } from "./ImagesModal";
import { fireEvent } from "@testing-library/react";
import {
    ProductStateType,
    initialState,
} from "../../../../store/reducer/product";
import * as mocks from "../../../../__mocks__/data/review";

const initModalState: ModalStateType = { type: "images", content: "" };
const initproductState: ProductStateType = {
    ...initialState,
    reviews: { ...initialState.reviews, ...mocks.review("id") },
};

describe("<ImagesModal/>", () => {
    const renderComponent = () => {
        const obj = renderWithProviders(<ImagesModal />, {
            preloadedState: {
                modalState: initModalState,
                productState: initproductState,
            },
        });

        const store = obj.store;
        const images = obj.getAllByRole("img");
        const xButton = obj.getByLabelText("닫힘버튼");

        return { store, xButton, images };
    };

    test("렌더링", () => {
        const { xButton, images } = renderComponent();

        expect(images).not.toBe([]);
        expect(xButton).toBeInTheDocument();
    });

    test("x 버튼 누를시 modal 닫힘", () => {
        const { store, xButton } = renderComponent();

        fireEvent.click(xButton);
        expect(store.getState().modalState.type).toBe(null);
    });

    test("이미지 클릭시 상세리뷰 모달 이동", () => {
        const { store, images } = renderComponent();

        fireEvent.click(images[0]);
        expect(store.getState().modalState.type).toBe("review");
    });
});
