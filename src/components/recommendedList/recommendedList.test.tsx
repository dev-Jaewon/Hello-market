import { act } from "react-dom/test-utils";
import { render } from "@testing-library/react";
import { RecommendedList } from "./RecommendedList";
import { intersect, getObserverOf } from "../../__mocks__/interection-oserver";
import { recommededItems } from "../../__mocks__/data/recommenedList";

describe("<RecommendedList />", () => {
    test("observer 생성", () => {
        const { container } = render(
            <RecommendedList {...recommededItems[0]} />
        );
        const target = container.firstChild as HTMLElement;

        act(() => {
            intersect(target, false);
        });

        const instance = getObserverOf(target);

        expect(instance.observe).toHaveBeenCalledWith(target);
    });

    test("view port 들어 올경우 observer 해제", () => {
        const { container } = render(
            <RecommendedList {...recommededItems[0]} />
        );
        const target = container.firstChild as HTMLElement;

        expect(getObserverOf(target).observe).toHaveBeenCalledWith(target);

        act(() => {
            intersect(target, true);
        });

        expect(getObserverOf(target)).toEqual(undefined);
    });

    test("컴포넌트 unmount시 observer 해제", () => {
        const { container, unmount } = render(
            <RecommendedList {...recommededItems[0]} />
        );

        unmount();

        expect(getObserverOf(container.firstChild as HTMLElement)).toEqual(
            undefined
        );
    });

    test("컴포넌트가 view port안에 없을 경우", () => {
        const { container, queryByLabelText } = render(
            <RecommendedList {...recommededItems[0]} />
        );

        act(() => {
            intersect(container.firstChild as HTMLElement, false);
        });

        expect(queryByLabelText("로딩상태 화면")).toBeInTheDocument();
    });

    test("컴포넌트가 view port안에 있을 경우", () => {
        const { container, queryByLabelText } = render(
            <RecommendedList {...recommededItems[0]} />
        );

        act(() => {
            intersect(container.firstChild as HTMLElement, true);
        });

        expect(queryByLabelText("로딩상태 화면")).not.toBeInTheDocument();
    });
});
