import Link from "next/link";
import styled from "@emotion/styled";
import { FocusEvent, useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide, SwiperRef } from "swiper/react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import "swiper/swiper.min.css";
import "swiper/swiper-bundle.min.css";
import { Autoplay, Navigation } from "swiper";

export type CarouselType = {
    list: string[];
};

type swiperType = Pick<SwiperRef, "swiper">["swiper"];

export const Carousel = (props: CarouselType) => {
    const swiperRef = useRef<SwiperRef | null>(null);
    const focusTimer = useRef<NodeJS.Timeout | null>(null);
    const containerRef = useRef<HTMLDivElement | null>(null);
    const [currentIndex, setCurrentIndex] = useState<number>(0);

    useEffect(() => {
        return () => {
            if (focusTimer.current) clearTimeout(focusTimer.current);
        };
    }, []);

    const handleSliderChange = (e: swiperType) => {
        setCurrentIndex(e.realIndex);
    };

    const handleCarouselFocus = (_: FocusEvent<HTMLElement>) => {
        swiperRef.current?.swiper.autoplay.stop();
    };

    const handleCarouselBlur = (_: FocusEvent<HTMLElement>) => {
        swiperRef.current?.swiper.autoplay.start();
    };

    const currentfocus = () => {
        if (focusTimer.current) clearTimeout(focusTimer.current);

        focusTimer.current = setTimeout(() => {
            const currentCarousel = containerRef.current?.querySelector(
                ".swiper-slide-active"
            )?.firstElementChild as HTMLElement;

            currentCarousel && currentCarousel.focus();
        }, 300);
    };

    return (
        <>
            <Container
                ref={containerRef}
                onFocus={handleCarouselFocus}
                onBlur={handleCarouselBlur}
            >
                <button
                    className={`swiper-button prev prev-button-carousel`}
                    aria-label="이전 캐러셀 항목"
                >
                    <IoIosArrowBack size={30} color="white" />
                </button>
                <Swiper
                    loop={true}
                    ref={swiperRef}
                    slidesPerView={1}
                    onNavigationNext={currentfocus}
                    onNavigationPrev={currentfocus}
                    onSlideChange={handleSliderChange}
                    centeredSlides={true}
                    modules={[Autoplay, Navigation]}
                    wrapperTag="ul"
                    spaceBetween={0}
                    navigation={{
                        nextEl: `.next-button-carousel`,
                        prevEl: `.prev-button-carousel`,
                    }}
                    autoplay={{
                        delay: 3000,
                    }}
                >
                    {props.list.map((image, i) => (
                        <SwiperItem
                            key={i}
                            tag="li"
                            tab={currentIndex}
                            index={i}
                        >
                            <Link href="/">
                                <img src={image} alt={"slide image_" + i} />
                            </Link>
                        </SwiperItem>
                    ))}
                </Swiper>
                <button
                    className={`swiper-button next next-button-carousel`}
                    aria-label="다음 캐러셀 항목"
                >
                    <IoIosArrowForward size={30} color="white" />
                </button>
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
    max-width: 1900px;

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

    .swiper-slide {
        a {
            display: block;
            width: 100%;
            height: 100%;
        }

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
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

    .swiper-button {
        top: calc(50%);
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 55px;
        height: 55px;
        border-radius: 50%;
        background: none;
        box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
        outline: unset;
        border: none;
        z-index: 10;
        transform: translateY(-50px);
        cursor: pointer;
        background-color: rgba(0, 0, 0, 0.25);
        opacity: 0;
        transition: 0.3s;

        &:focus {
            opacity: 1;
        }
    }

    .next {
        right: 100px;
        transform: translate(30px, -50%);
    }

    .prev {
        left: 100px;
        transform: translate(-30px, -50%);
    }

    &:hover {
        .swiper-button {
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

const SwiperItem = styled(SwiperSlide)<{ tab: number; index: number }>`
    transition: 0.3s;
    visibility: ${({ tab, index }) => (tab === index ? "visible" : "hidden")};

    &:focus {
        border: 5px solid red;
    }
`;
