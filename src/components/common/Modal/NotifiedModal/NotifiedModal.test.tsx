import { NotifiedModal } from "./NotifiedModal";
import { matchers } from "@emotion/jest";
import { fireEvent } from "@testing-library/react";
import { renderWithProviders } from "../../../../utils/test-utils";
expect.extend(matchers);

describe("<NotifiedModal /> component", () => {
    const renderComponent = () => {
        const { store, getByRole, unmount } = renderWithProviders(
            <NotifiedModal />,
            {
                preloadedState: {
                    modalState: {
                        type: "notified",
                        content: "테스트",
                    },
                },
            }
        );

        const content = getByRole("content");
        const background = getByRole("region");
        const confirmButton = getByRole("button");

        return { background, content, confirmButton, store, unmount };
    };

    test("렌더링", () => {
        const { background, content, confirmButton } = renderComponent();

        expect(content).toBeInTheDocument();
        expect(background).toBeInTheDocument();
        expect(confirmButton).toBeInTheDocument();
    });

    test("background 클릭시 닫힘", async () => {
        const { background, store } = renderComponent();

        // 초기 열려 있을때 상태 값
        expect(store.getState().modalState).toEqual({
            type: "notified",
            content: "테스트",
        });

        fireEvent.click(background);

        expect(store.getState().modalState).toEqual({
            type: null,
            content: "테스트",
        });
    });

    test("확인버튼 클릭시 닫힘", async () => {
        const { confirmButton, store } = renderComponent();

        // 초기 열려 있을때 상태 값
        expect(store.getState().modalState).toEqual({
            type: "notified",
            content: "테스트",
        });

        fireEvent.click(confirmButton);

        expect(store.getState().modalState).toEqual({
            type: null,
            content: "테스트",
        });
    });

    test("다른곳을 눌럿을 경우 안닫힘", async () => {
        const { content, store } = renderComponent();

        // 초기 열려 있을때 상태 값
        expect(store.getState().modalState).toEqual({
            type: "notified",
            content: "테스트",
        });

        fireEvent.click(content);

        expect(store.getState().modalState).toEqual({
            type: "notified",
            content: "테스트",
        });
    });

    test("unmount 일 경우 value 값 초기화", async () => {
        const { store, unmount } = renderComponent();

        // 초기 열려 있을때 상태 값
        expect(store.getState().modalState).toEqual({
            type: "notified",
            content: "테스트",
        });

        unmount();

        expect(store.getState().modalState).toEqual({
            type: null,
            content: "",
        });
    });
});
