import { RefObject, useState } from "react";
import styled from "@emotion/styled";

export type ProductDetailHeaderType = {
    defaultTap: null | "description" | "info" | "review" | "inquiry";
    reviewCount: number;
    inquiryRef: RefObject<HTMLDivElement>;
    infoRefRef: RefObject<HTMLDivElement>;
    reviewRef: RefObject<HTMLDivElement>;
    descriptionRef: RefObject<HTMLDivElement>;
};

export const ProductDetailHeader = (props: ProductDetailHeaderType) => {
    const [current, setCurrent] = useState<string | null>(props.defaultTap);

    const handleTapClick = (
        tab: null | "descriptionRef" | "infoRefRef" | "reviewRef" | "inquiryRef"
    ) => {
        if (!tab) return;

        props[tab].current?.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });

        setCurrent(tab);
    };

    return (
        <Container>
            <Tab
                current={current?.includes("description")}
                onClick={() => handleTapClick("descriptionRef")}
            >
                상품설명
            </Tab>
            <Tab
                current={current?.includes("info")}
                onClick={() => handleTapClick("infoRefRef")}
            >
                상세정보
            </Tab>
            <Tab
                current={current?.includes("review")}
                onClick={() => handleTapClick("reviewRef")}
            >
                후기 {props.reviewCount}
            </Tab>
            <Tab
                current={current?.includes("inquiry")}
                onClick={() => handleTapClick("inquiryRef")}
            >
                문의
            </Tab>
        </Container>
    );
};

export const Container = styled.ul`
    display: flex;
    width: 100%;
    height: 60px;
    list-style: none;
`;

export const Tab = styled.li<{ current: boolean | undefined }>`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #f0f0f0;
    cursor: pointer;
    color: ${({ current }) => (current ? "var(--brand)" : "var(--black)")};
    background-color: ${({ current }) =>
        current ? "white" : "rgb(237, 235, 235)"};
`;
