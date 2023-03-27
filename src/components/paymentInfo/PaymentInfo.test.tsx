import { renderWithProviders } from "../../utils/test-utils";
import { cartMock } from "../../__mocks__/data/cart";
import { PaymentInfo } from "./PaymentInfo";
import { addCommaToNumber } from "../../utils/utils";

describe("<PaymentInfo />", () => {
    const renderComponent = () => {
        const ins = renderWithProviders(<PaymentInfo />, {
            preloadedState: {
                cartState: {
                    list: [cartMock()],
                },
            },
        });

        const store = ins.store;
        const prouctPrice = ins.getByLabelText("상품금액");
        const salePrice = ins.getByLabelText("할인금액");
        const paymentAmount = ins.getByLabelText("걸제예정금액");

        return { store, prouctPrice, salePrice, paymentAmount };
    };

    test("총 결제 금액 렌더링", () => {
        const { store, prouctPrice } = renderComponent();

        const price = store.getState().cartState.list.reduce((sum, cur) => {
            if (cur.checked) {
                sum = sum + cur.beforeDiscountPrice * cur.quantity;
            }
            return sum;
        }, 0);

        expect(prouctPrice.textContent).toBe(addCommaToNumber(price));
    });

    test("총 할인 금액 렌더링", () => {
        const { store, salePrice } = renderComponent();

        const price = store.getState().cartState.list.reduce((sum, cur) => {
            if (cur.checked) {
                sum =
                    sum + (cur.beforeDiscountPrice - cur.price) * cur.quantity;
            }
            return sum;
        }, 0);

        expect(salePrice.textContent).toBe(addCommaToNumber(price));
    });

    test("결제 예정금액 렌더링", () => {
        const { store, paymentAmount } = renderComponent();

        const price = store.getState().cartState.list.reduce((sum, cur) => {
            if (cur.checked) {
                sum = sum + cur.price * cur.quantity;
            }
            return sum;
        }, 0);

        expect(paymentAmount.textContent).toBe(addCommaToNumber(price));
    });
});
