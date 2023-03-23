import { fireEvent } from "@testing-library/react";
import { QuestionModal } from "./QuestionModal";
import { setOpenModal } from "../../../../store/reducer/modal";
import { renderWithProviders } from "../../../../utils/test-utils";

describe("<QuestionModal />", () => {
    const renderComponent = () => {
        const obj = renderWithProviders(<QuestionModal />);

        const store = obj.store;

        const inputTitle = obj.getByLabelText("제목");
        const inputContent = obj.getByLabelText("내용");
        const cancelButton = obj.getByText("취소");
        const submitButton = obj.getByText("등록");
        const closeIconButton = obj.getByLabelText("닫힘버튼");

        return {
            store,
            inputTitle,
            inputContent,
            cancelButton,
            submitButton,
            closeIconButton,
        };
    };

    beforeEach(() => {});

    test("렌더링", () => {
        const {
            inputTitle,
            inputContent,
            cancelButton,
            submitButton,
            closeIconButton,
        } = renderComponent();

        expect(inputTitle).toBeInTheDocument();
        expect(inputContent).toBeInTheDocument();
        expect(cancelButton).toBeInTheDocument();
        expect(submitButton).toBeInTheDocument();
        expect(closeIconButton).toBeInTheDocument();
    });

    test("모두 입력이 되어야 submit 버튼 활성화", () => {
        const { inputTitle, inputContent, submitButton } = renderComponent();

        fireEvent.change(inputTitle, { target: { value: "제목 입력" } });

        expect(submitButton).toBeDisabled();

        fireEvent.change(inputContent, { target: { value: "내용 입력" } });

        expect(submitButton).not.toBeDisabled();
    });

    test("취소 눌럿을 경우 모달 닫힘", () => {
        const { store, cancelButton } = renderComponent();

        store.dispatch(setOpenModal("question"));

        expect(store.getState().modalState.type).toBe("question");

        fireEvent.click(cancelButton);

        expect(store.getState().modalState.type).toBe(null);
    });
});
