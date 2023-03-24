import { renderWithProviders } from "../../../../utils/test-utils";
import { ModalStateType } from "../../../../store/reducer/modal";
import { DetailReview } from "./DetailReview";
import { fireEvent } from "@testing-library/react";

const initModalState: ModalStateType = { type: "review", content: "" };

describe("<DetailReview />", () => {
    const renderComponent = () => {
        const obj = renderWithProviders(<DetailReview />, {
            preloadedState: { modalState: initModalState },
        });
        const container = obj.container;

        const store = obj.store;
        const productImage = obj.getByRole("img");
        const xButton = obj.getByLabelText("닫힘버튼");
        const moreReviewsbutton = obj.getByRole("button");
        const productName = container.querySelector(".productName");
        const reviewAuthor = container.querySelector(".author");
        const reviewContent = container.querySelector(".productContent");
        const reviewCreateDate = container.querySelector(".createDate");

        return {
            store,
            productImage,
            xButton,
            moreReviewsbutton,
            productName,
            reviewAuthor,
            reviewContent,
            reviewCreateDate,
        };
    };

    test("렌더링", () => {
        const {
            productImage,
            xButton,
            moreReviewsbutton,
            productName,
            reviewAuthor,
            reviewContent,
            reviewCreateDate,
        } = renderComponent();

        expect(productImage).toBeInTheDocument();
        expect(xButton).toBeInTheDocument();
        expect(moreReviewsbutton).toBeInTheDocument();
        expect(productName).toBeInTheDocument();
        expect(reviewAuthor).toBeInTheDocument();
        expect(reviewContent).toBeInTheDocument();
        expect(reviewCreateDate).toBeInTheDocument();
    });

    test("x 버튼 누를시 modal 닫힘", () => {
        const { store, xButton } = renderComponent();

        fireEvent.click(xButton);
        expect(store.getState().modalState.type).toBe(null);
    });

    test("사진목록 보기 버튼 클릭시 모달 전환", () => {
        const { moreReviewsbutton, store } = renderComponent();

        fireEvent.click(moreReviewsbutton);
        expect(store.getState().modalState.type).toBe("images");
    });
});
