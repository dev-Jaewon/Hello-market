import { renderWithProviders } from "../../utils/test-utils";
import { ProductOrder } from "./productOrder";
import mockData from "../../__mocks__/data/product.json";

describe("<RecommendedList />", () => {
    const renderComponent = () => {
        const render = renderWithProviders(
            <ProductOrder {...mockData.result} />
        );

        const productName = render.getByLabelText("상품이름");
        const productEach = render.getByLabelText("판매단위");
        const productPrice = render.getByLabelText("상품가격");
        const productSeller = render.getByLabelText("판매자");
        const productWeight = render.getByLabelText("상품무게");
        const productOrigin = render.getByLabelText("원산지");
        const productDescribe = render.getByLabelText("상품설명");
        const productdisCountRate = render.getByLabelText("할인율");
        const productPackagingType = render.getByLabelText("포장타입");
        const productBeforeDiscountPrice = render.getByLabelText("할인전 가격");
        const productThumbNail = render.getByAltText(
            `${mockData.result.name} 이미지`
        );

        return {
            productName,
            productPrice,
            productEach,
            productSeller,
            productWeight,
            productOrigin,
            productDescribe,
            productdisCountRate,
            productPackagingType,
            productBeforeDiscountPrice,
            productThumbNail,
        };
    };

    test("렌더링", () => {
        const p = renderComponent();

        expect(p.productName).toBeInTheDocument();
        expect(p.productEach).toBeInTheDocument();
        expect(p.productPrice).toBeInTheDocument();
        expect(p.productSeller).toBeInTheDocument();
        expect(p.productWeight).toBeInTheDocument();
        expect(p.productOrigin).toBeInTheDocument();
        expect(p.productDescribe).toBeInTheDocument();
        expect(p.productThumbNail).toBeInTheDocument();
        expect(p.productdisCountRate).toBeInTheDocument();
        expect(p.productPackagingType).toBeInTheDocument();
        expect(p.productBeforeDiscountPrice).toBeInTheDocument();
    });
});
