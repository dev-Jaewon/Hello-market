import { renderWithProviders } from "../../utils/test-utils";
import { OrderUserInfo } from "./OrderUserInfo";
import { getUserInfo } from "../../__mocks__/data/userInfo";

describe("<Order Info />", () => {
    const renderComponent = () => {
        const ins = renderWithProviders(<OrderUserInfo />, {
            preloadedState: {
                userInfoState: getUserInfo,
            },
        });

        const name = ins.getByText(getUserInfo.name);
        const phonNumber = ins.getByText(getUserInfo.phone);
        const email = ins.getByText(getUserInfo.email);

        return { name, phonNumber, email };
    };

    test("렌더링", () => {
        const { name, phonNumber, email } = renderComponent();

        expect(name).toBeInTheDocument();
        expect(phonNumber).toBeInTheDocument();
        expect(email).toBeInTheDocument();
    });
});
