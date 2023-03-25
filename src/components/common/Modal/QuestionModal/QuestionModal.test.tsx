import { act } from "react-dom/test-utils";
import { fireEvent } from "@testing-library/react";
import { QuestionModal } from "./QuestionModal";
import { setOpenModal } from "../../../../store/reducer/modal";
import { renderWithProviders } from "../../../../utils/test-utils";

describe("<QuestionModal />", () => {
    const renderComponent = () => {
        const obj = renderWithProviders(<QuestionModal />, {
            preloadedState: {
                modalState: {
                    type: "question",
                    content: "",
                },
            },
        });

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
            store,
        } = renderComponent();

        expect(inputTitle).toBeInTheDocument();
        expect(inputContent).toBeInTheDocument();
        expect(cancelButton).toBeInTheDocument();
        expect(submitButton).toBeInTheDocument();
        expect(closeIconButton).toBeInTheDocument();

        const modalState = store.getState().modalState.type;
        expect(modalState).toBe("question");
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

    test("등록 버튼 눌럿을 경우 데이터 등록 및 목록 추가, 모달 닫힘", async () => {
        let { inputTitle, inputContent, submitButton, store } =
            renderComponent();

        await act(() => {
            fireEvent.change(inputTitle, {
                target: { value: "테스트 문의 제목" },
            });
            fireEvent.change(inputContent, {
                target: { value: "문의 내용 123" },
            });
            fireEvent.click(submitButton);
        });

        const inquireList = store.getState().productState.inquire.list;
        expect(inquireList).toHaveLength(1);

        const modalState = store.getState().modalState.type;
        expect(modalState).toBe(null);
    });
});
