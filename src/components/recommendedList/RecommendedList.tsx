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

export type RecommendedListType = {
    title?: string;
    description?: string;
    list: Array<RecommendedItemType>;
};

export const RecommendedList = (props: RecommendedListType) => {
    const swiperSetProperty: SwiperProps = {
        modules: [FreeMode, Navigation],
        spaceBetween: 17,
        slidesPerView: 4,
        slidesPerGroup: 4,
        navigation: {
            nextEl: ".next-button",
            prevEl: ".prev-button",
        },
    };
    return (
        <Container>
            {props.title && (
                <RecommenedListTitle aria-label="추천 리스트 제목">
                    {props.title}
                </RecommenedListTitle>
            )}

            {props.description && (
                <RecommenedListDescription aria-label="추천 리스트 상품 설명">
                    {props.description}
                </RecommenedListDescription>
            )}

            <SwiperContainer>
                <i
                    className="swiper-button next-button"
                    aria-label="이전 상품리스트 버튼"
                >
                    <IoIosArrowForward size={30} />
                </i>
                <i
                    className="swiper-button prev-button"
                    aria-label="다음 상품리스트 버튼"
                >
                    <IoIosArrowBack size={30} />
                </i>
                <Swiper {...swiperSetProperty} aria-label="slider">
                    {props.list &&
                        props.list.map((item) => (
                            <SwiperSlide key={item.id}>
                                <RecommendedItem {...item} />
                            </SwiperSlide>
                        ))}
                </Swiper>
            </SwiperContainer>
        </Container>
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

    .next-button {
        right: 0;
        transform: translate(30px, -50%);
    }

    .prev-button {
        transform: translate(-30px, -50%);
    }

    .swiper-wrapper {
        width: 100%;
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

const RecommenedListDescription = styled.p`
    font-size: 16px;
    color: rgb(153, 153, 153);
    margin-bottom: 10px;
`;
