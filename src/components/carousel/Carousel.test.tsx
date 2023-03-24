import { Carousel, CarouselType } from "./Carousel";
import { render as Render } from "@testing-library/react";
import { carousel } from "../../__mocks__/data/carousel";

describe("Home Page", () => {
    const renderComponent = (props: CarouselType) => {
        const render = Render(<Carousel {...props} />);

        const slider = render.container.querySelector(".swiper-slide");

        return { render, slider };
    };

    test("이미지x 렌더링", () => {
        const { slider } = renderComponent({ list: [] });
        expect(slider).not.toBeInTheDocument();
    });

    test("이미지o 렌더링", () => {
        const { slider } = renderComponent({ list: carousel });
        expect(slider).toBeInTheDocument();
    });
});
