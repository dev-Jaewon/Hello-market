import { render } from "@testing-library/react";
import { IconLink, IconLinkProps } from "./IconLink";
import { matchers } from "@emotion/jest";
import { SiTestin } from "react-icons/si";
expect.extend(matchers);

describe("<IconLink /> component", () => {
    const init: IconLinkProps = {
        href: "",
        icon: SiTestin,
    };

    const renderComponent = (props: IconLinkProps) => {
        const { getByRole } = render(<IconLink {...init} />);

        const aTag = getByRole("link");
        const icon = getByRole("img");

        return { aTag, icon };
    };

    test("렌더링", () => {
        const { aTag, icon } = renderComponent(init);

        expect(aTag).toBeInTheDocument();
        expect(icon);
    });
});
