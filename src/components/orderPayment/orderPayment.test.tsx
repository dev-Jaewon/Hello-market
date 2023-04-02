import { fireEvent } from "@testing-library/react";
import { renderWithProviders } from "../../utils/test-utils";
import { OrderPayment } from "./orderPayment";

describe("<OrderPayment />", () => {
    const renderComponent = () => {
        const ins = renderWithProviders(<OrderPayment />);

        const store = ins.store;
        const kakaoPaymentBtn = ins.getByLabelText("카카오결제버튼");

        return { store, kakaoPaymentBtn };
    };

    test("렌더링", () => {
        const { kakaoPaymentBtn } = renderComponent();
        expect(kakaoPaymentBtn).toBeInTheDocument();
    });

    test("카카오 결제정보 등록", () => {
        const { store, kakaoPaymentBtn } = renderComponent();

        expect(store.getState().userInfoState.payment).toEqual("");
        fireEvent.click(kakaoPaymentBtn);
        expect(store.getState().userInfoState.payment).toEqual("kakao");
    });
});
