import { fireEvent, render } from "@testing-library/react";
import { RecommendedItem, RecommendedItemType } from "./recommendedItem";
import mockRouter from "next-router-mock";
import { MemoryRouterProvider } from "next-router-mock/MemoryRouterProvider";
import { recommededItems } from "../../__mocks__/data/recommenedList";

jest.mock("next/router", () => require("next-router-mock"));

describe("<recommendedItem />", () => {
    const renderComponent = (props: RecommendedItemType) => {
        const { getByRole, getByLabelText, queryByLabelText, getByTestId } =
            render(<RecommendedItem {...props} />, {
                wrapper: MemoryRouterProvider,
            });

        const thumnail = getByRole("img");
        const productName = getByTestId("상품이름");
        const productPrice = getByLabelText(/가격/);
        const comentLength = getByLabelText(/리뷰/);
        const productDescribe = getByTestId("상품설명");
        const addToCartIcon = getByTestId("카트추가아이콘");
        const beforDiscountPrice = getByTestId("할인전가격");
        const reviewIcon = getByTestId("reviewIcon");

        return {
            thumnail,
            reviewIcon,
            productName,
            productPrice,
            addToCartIcon,
            comentLength,
            productDescribe,
            beforDiscountPrice,
        };
    };

    test("렌더링", () => {
        const mock = recommededItems[0].list[0];
        const el = renderComponent(mock);

        expect(el.thumnail).toBeInTheDocument();
        expect(el.reviewIcon).toBeInTheDocument();
        expect(el.productName).toBeInTheDocument();
        expect(el.productPrice).toBeInTheDocument();
        expect(el.comentLength).toBeInTheDocument();
        expect(el.addToCartIcon).toBeInTheDocument();
        expect(el.productDescribe).toBeInTheDocument();
        expect(el.beforDiscountPrice).toBeInTheDocument();
    });

    test("페이지 이동", () => {
        const mock = recommededItems[0].list[0];
        const { thumnail } = renderComponent(mock);

        fireEvent.click(thumnail);
        expect(mockRouter.asPath).toEqual(`/product/${mock.id}`);
    });
});
