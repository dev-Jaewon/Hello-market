import styled from "@emotion/styled";
import { Swiper, SwiperSlide, SwiperRef } from "swiper/react";
import { Autoplay, Navigation } from "swiper";

import "swiper/swiper.min.css";
import "swiper/swiper-bundle.min.css";
import { useState } from "react";

export type CarouselType = {
    list: string[];
};

type swiperType = Pick<SwiperRef, "swiper">["swiper"];

export const Carousel = (props: CarouselType) => {
    const [currentIndex, setCurrentIndex] = useState<number>(0);

    const handleSliderChange = (e: swiperType) => {
        setCurrentIndex(e.activeIndex);
    };

    const swiperSetProperty = {
        autoplay: {
            delay: 4000,
        },
        modules: [Autoplay, Navigation],
        className: "mySwiper",
        spaceBetween: 0,
        navigation: true,
        centeredSlides: true,
        onSlideChange: (e: swiperType) => handleSliderChange(e),
    };

    return (
        <>
            <Container>
                <Swiper {...swiperSetProperty}>
                    {props.list.map((image, i) => (
                        <SwiperSlide key={i}>
                            <img src={image} alt={"slide image_" + i} />
                        </SwiperSlide>
                    ))}
                </Swiper>
                <PageNation>
                    <span>{currentIndex + 1}</span> /{" "}
                    <span>{props.list.length}</span>
                </PageNation>
            </Container>
        </>
    );
};

const Container = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    height: 370px;
    width: 100vw;

    .swiper {
        width: 100%;
        max-width: 1900px;
        height: 100%;
    }

    .swiper-slide {
        text-align: center;
        font-size: 18px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .swiper-slide img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .swiper-button-prev,
    .swiper-button-next {
        transition: 0.1s;
        opacity: 0;
    }

    &:hover {
        .swiper-button-prev,
        .swiper-button-next {
            opacity: 1;
        }
    }
`;

const PageNation = styled.div`
    position: absolute;
    bottom: 20px;
    right: 30%;
    z-index: 10;
    color: white;
    border-radius: 30px;
    padding: 0 10px;
    background: rgba(0, 0, 0, 0.15);
`;
