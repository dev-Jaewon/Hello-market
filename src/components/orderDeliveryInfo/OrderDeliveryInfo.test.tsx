import { renderWithProviders } from "../../utils/test-utils";
import { OrderDeliveryinfo } from "./OrderDeliveryInfo";
import { getUserInfo } from "../../__mocks__/data/userInfo";
import { Address } from "../../store/reducer/user";

describe("<OrderDeliveryinfo />", () => {
    const renderComponent = () => {
        const ins = renderWithProviders(<OrderDeliveryinfo />, {
            preloadedState: {
                userInfoState: getUserInfo,
            },
        });

        const container = ins.container;
        const receiverInfo = container.querySelector(".receiver-user");
        const receiverPlace = container.querySelector(".receiver-place");

        return { container, receiverInfo, receiverPlace };
    };

    test("렌더링", () => {
        const { receiverInfo, receiverPlace } = renderComponent();

        const selected = (getUserInfo.address as Array<Address>).find(
            (item) => item.selected
        )!;

        expect(receiverInfo?.textContent).toContain(selected.phoneNumber);
        expect(receiverInfo?.textContent).toContain(selected.receiver);
        expect(receiverPlace?.textContent).toContain(selected.placeToPut);
        expect(receiverPlace?.textContent).toContain(selected.doorPassword);
    });
});
