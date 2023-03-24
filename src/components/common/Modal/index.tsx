import { ReactElement } from "react";
import { useSelector } from "react-redux";
import { modalState } from "../../../store/reducer/modal";
import { DetailReview } from "./DetailReview/DetailReview";
import { ImagesModal } from "./ImagesModal/ImagesModal";
import { ModalStateType } from "../../../store/reducer/modal";

import { NotifiedModal } from "./NotifiedModal/NotifiedModal";
import { QuestionModal } from "./QuestionModal/QuestionModal";

type Modals = {
    [key in Exclude<ModalStateType["type"], null>]: ReactElement;
};

export const Modal = () => {
    const { type } = useSelector(modalState);

    const modals: Modals = {
        notified: <NotifiedModal />,
        question: <QuestionModal />,
        images: <ImagesModal />,
        review: <DetailReview />,
    };

    if (!type) return <></>;

    return <>{modals[type]}</>;
};
