import { useSelector } from "react-redux";
import { modalState } from "../../../store/reducer/modal";

import { NotifiedModal } from "./NotifiedModal/NotifiedModal";

export const Modal = () => {
    const { type } = useSelector(modalState);

    const modals = {
        notified: <NotifiedModal />,
    };

    if (!type) return <></>;

    return <>{modals[type]}</>;
};
