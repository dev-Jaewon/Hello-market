import "@testing-library/jest-dom";
import { fireEvent, render } from "@testing-library/react";
import { BaseModal, ModalPropsType } from "./BaseModal";
import { matchers } from "@emotion/jest";
expect.extend(matchers);

describe("<BaseModal /> component", () => {
    const handleClick = jest.fn();
    const renderComponent = (props: ModalPropsType) => {
        const { getByRole } = render(
            <BaseModal {...props}>
                <div></div>
            </BaseModal>
        );

        const container = getByRole("region");

        return { container };
    };

    test("렌더링", () => {
        const { container } = renderComponent({
            handleModalOpen: handleClick,
            children: <div></div>,
        });
        fireEvent.click(container);

        expect(container).toBeInTheDocument();
        expect(handleClick).toHaveBeenCalledTimes(1);
    });
});
