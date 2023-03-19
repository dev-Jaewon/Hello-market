import { render as renderTest } from "@testing-library/react";
import { RecommendedList, RecommendedListType } from "./RecommendedList";
import mockData from "../../__mocks__/data/recommenedList.json";

describe("<RecommendedList />", () => {
    const renderComponent = (props: RecommendedListType) => {
        const render = renderTest(<RecommendedList {...props} />);

        const listSlider = render.queryByLabelText("slider");
        const title = render.queryByLabelText("추천 리스트 제목");
        const description = render.queryByLabelText("추천 리스트 상품 설명");

        return {
            render,
            title,
            listSlider,
            description,
        };
    };

    test("provided props 렌더링", () => {
        const { title, listSlider, description } = renderComponent({
            ...mockData.result,
        });

        expect(title).toBeInTheDocument();
        expect(listSlider).toBeInTheDocument();
        expect(description).toBeInTheDocument();
    });

    test("optional props 렌더링", () => {
        const { title, description } = renderComponent({
            list: mockData.result.list,
        });

        expect(title).not.toBeInTheDocument();
        expect(description).not.toBeInTheDocument();
    });
});
