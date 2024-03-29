import styled from "@emotion/styled";
import { Swiper, SwiperSlide, SwiperProps } from "swiper/react";
import { FreeMode, Navigation } from "swiper";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import "swiper/swiper.min.css";
import "swiper/swiper-bundle.min.css";

import {
    RecommendedItem,
    RecommendedItemType,
} from "../recommendedItem/recommendedItem";
import { useLazy } from "../../hooks/useLazy";
import { Skeleton } from "../common/Skeleton/Skeleton";

export type RecommendedListType = {
    id: string;
    title?: string;
    description?: string;
    list: Array<RecommendedItemType>;
};

export const RecommendedList = (props: RecommendedListType) => {
    const { ref, inViewPort } = useLazy(0.3);

    const swiperSetProperty: SwiperProps = {
        modules: [FreeMode, Navigation],
        spaceBetween: 17,
        slidesPerView: 4,
        slidesPerGroup: 4,
        wrapperTag: "ul",
        navigation: {
            nextEl: `.next-button-${props.id}`,
            prevEl: `.prev-button-${props.id}`,
        },
    };

    return (
        <Container ref={ref}>
            {inViewPort ? (
                <>
                    {props.title && (
                        <RecommenedListTitle>{props.title}</RecommenedListTitle>
                    )}

                    {props.description && (
                        <RecommenedListDescription>
                            {props.description}
                        </RecommenedListDescription>
                    )}

                    <SwiperContainer>
                        <i
                            className={`swiper-button prev prev-button-${props.id}`}
                            aria-label="이전 상품리스트 버튼"
                        >
                            <IoIosArrowBack size={30} />
                        </i>
                        <i
                            className={`swiper-button next next-button-${props.id}`}
                            aria-label="다음 상품리스트 버튼"
                        >
                            <IoIosArrowForward size={30} />
                        </i>
                        <Swiper {...swiperSetProperty}>
                            {props.list &&
                                props.list.map((item) => (
                                    <SwiperSlide key={item.id} tag="li">
                                        <RecommendedItem {...item} />
                                    </SwiperSlide>
                                ))}
                        </Swiper>
                    </SwiperContainer>
                </>
            ) : (
                <SkeletonRecommendedList aria-label="로딩 중" />
            )}
        </Container>
    );
};

export const SkeletonRecommendedList = () => {
    return (
        <div aria-label="로딩상태 화면">
            <Skeleton height="50" width="1050" margin="10px 0" />
            <Skeleton height="50" width="1050" margin="10px 0" />
            <Skeleton height="450" width="1050" />
        </div>
    );
};

const Container = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 1050px;
`;

const SwiperContainer = styled.div`
    position: relative;
    width: 100%;
    max-width: 1050px;
    margin-top: 10px;

    .swiper-button {
        top: calc(50% - 50px);
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 55px;
        height: 55px;
        border-radius: 50%;
        background: white;
        box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
        z-index: 10;
        transform: translateY(-50px);
        cursor: pointer;
    }

    .next {
        right: 0;
        transform: translate(30px, -50%);
    }

    .prev {
        transform: translate(-30px, -50%);
    }

    .swiper-wrapper {
        li {
            &:not(:last-child) {
                margin-right: 17px;
            }
        }
    }

    .swiper-slide {
        display: flex;
        align-items: center;
        justify-content: center;
        width: fit-content;
    }

    .swiper-button-disabled {
        display: none;
    }
`;

const RecommenedListTitle = styled.h2`
    font-size: 28px;
    font-weight: 500;
    margin-bottom: 10px;
`;

const RecommenedListDescription = styled.h3`
    text-align: center;
    font-size: 16px;
    color: rgb(153, 153, 153);
    margin-bottom: 10px;
`;
