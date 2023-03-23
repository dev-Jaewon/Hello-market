import { useSelector } from "react-redux";
import { modalState } from "../../../store/reducer/modal";
import { DetailRew } from "./DetailReview/DetailRew";
import { ImagesModal } from "./ImagesModal/ImagesModal";

import { NotifiedModal } from "./NotifiedModal/NotifiedModal";
import { QuestionModal } from "./QuestionModal/QuestionModal";

export const Modal = () => {
    const { type } = useSelector(modalState);

    const modals = {
        notified: <NotifiedModal />,
        question: <QuestionModal />,
        images: <ImagesModal />,
        review: <DetailRew />,
    };

    if (!type) return <></>;

    return <>{modals[type]}</>;
};
