import { fireEvent, render } from "@testing-library/react";
import { Check } from "./Check";
import { CheckPropsType } from "./Check";

describe("<Check />", () => {
    const renderComponent = (props: CheckPropsType) => {
        const ins = render(<Check {...props} />);

        const checkIcon = ins.getByLabelText("체크 아이콘");

        return {
            ins,
            checkIcon,
        };
    };

    test("체크박스 클릭", () => {
        const onChange = jest.fn();
        const { checkIcon } = renderComponent({
            id: "requireAttribute",
            onChange,
        });

        fireEvent.click(checkIcon);
        expect(onChange).toHaveBeenCalled();
    });
});
