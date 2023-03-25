import { fireEvent, render } from "@testing-library/react";
import { Counter, CounterType } from "./Counter";

describe("<Counter />", () => {
    const onChange = jest.fn();

    const component = (props: CounterType) => {
        const instance = render(<Counter {...props} />);

        const inputBox = instance.getByRole("spinbutton");
        const incrementButton = instance.getByLabelText("더하기 버튼");
        const decrementButton = instance.getByLabelText("빼기 버튼");

        return {
            inputBox,
            incrementButton,
            decrementButton,
        };
    };

    afterEach(() => {
        onChange.mockClear();
    });

    test("렌더링", () => {
        const { inputBox, incrementButton, decrementButton } = component({
            value: 11,
            onChange,
        });

        expect(inputBox).toBeInTheDocument();
        expect(incrementButton).toBeInTheDocument();
        expect(decrementButton).toBeInTheDocument();
    });

    test("+ 클릭", () => {
        const { incrementButton } = component({ value: 22, onChange });

        fireEvent.click(incrementButton);
        expect(onChange).toHaveBeenCalledTimes(1);
        expect(onChange).toHaveBeenCalledWith(23);
    });

    test("- 클릭", () => {
        const { decrementButton } = component({ value: 33, onChange });

        fireEvent.click(decrementButton);
        expect(onChange).toHaveBeenCalledTimes(1);
        expect(onChange).toHaveBeenCalledWith(32);
    });

    test("0 경우 - 클릭", () => {
        const { decrementButton } = component({ value: 0, onChange });

        fireEvent.click(decrementButton);
        expect(onChange).toHaveBeenCalledWith(0);
    });

    test("input 변경", () => {
        const { inputBox } = component({ value: 11, onChange });

        fireEvent.change(inputBox, { target: { value: 22 } });
        expect(onChange).toHaveBeenCalledTimes(1);
        expect(onChange).toHaveBeenCalledWith(22);
    });

    test("input 0이로 변경", () => {
        const { inputBox } = component({ value: 11, onChange });

        fireEvent.change(inputBox, { target: { value: -1 } });
        expect(onChange).toHaveBeenCalledTimes(1);
        expect(onChange).toHaveBeenCalledWith(0);
    });

    test("input maxValue 이상으로 변경", () => {
        const { inputBox } = component({ value: 1, maxValue: 2, onChange });

        fireEvent.change(inputBox, { target: { value: 3 } });
        expect(onChange).toHaveBeenCalledTimes(1);
        expect(onChange).toHaveBeenCalledWith(2);
    });
});
