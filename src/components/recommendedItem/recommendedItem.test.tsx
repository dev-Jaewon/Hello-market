import { fireEvent, render } from "@testing-library/react";
import { RecommendedItem, RecommendedItemType } from "./recommendedItem";
import mockData from "../../__mocks__/data/recommenedList.json";
import mockRouter from "next-router-mock";
import { MemoryRouterProvider } from "next-router-mock/MemoryRouterProvider";

jest.mock("next/router", () => require("next-router-mock"));

describe("<recommendedItem />", () => {
    const renderComponent = (props: RecommendedItemType) => {
        const { getByRole, getByLabelText } = render(
            <RecommendedItem {...props} />,
            { wrapper: MemoryRouterProvider }
        );

        const thumnail = getByRole("img");
        const reviewIcon = getByLabelText("리뷰 아이콘");
        const productName = getByLabelText("상품이름");
        const discountRate = getByLabelText("할인율");
        const productPrice = getByLabelText("상품가격");
        const comentLength = getByLabelText("리뷰숫자");
        const productDescribe = getByLabelText("상품설명");
        const addToCartIcon = getByLabelText("상품을 카트에 추가하는 아이콘");
        const beforDiscountPrice = getByLabelText("할인전가격");

        return {
            thumnail,
            reviewIcon,
            productName,
            productPrice,
            discountRate,
            addToCartIcon,
            comentLength,
            productDescribe,
            beforDiscountPrice,
        };
    };

    test("렌더링", () => {
        const mock = mockData.data[0];
        const el = renderComponent(mock);

        expect(el.thumnail).toBeInTheDocument();
        expect(el.reviewIcon).toBeInTheDocument();
        expect(el.productName).toBeInTheDocument();
        expect(el.discountRate).toBeInTheDocument();
        expect(el.productPrice).toBeInTheDocument();
        expect(el.comentLength).toBeInTheDocument();
        expect(el.addToCartIcon).toBeInTheDocument();
        expect(el.productDescribe).toBeInTheDocument();
        expect(el.beforDiscountPrice).toBeInTheDocument();
    });

    test("페이지 이동", () => {
        const mock = mockData.data[0];
        const { thumnail } = renderComponent(mock);

        fireEvent.click(thumnail);
        expect(mockRouter.asPath).toEqual(`/product/${mock.id}`);
    });
});
