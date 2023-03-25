import { useRef } from "react";
import styled from "@emotion/styled";
import { ProductDetailHeader } from "./productDetailHeader/productDetailHeader";
import { ProductInquire } from "./productInquire/ProductInquire";
import { ProductReview } from "./productReview/ProductReview";

export const ProductDetail = () => {
    const reviewRef = useRef<HTMLDivElement | null>(null);
    const inquiryRef = useRef<HTMLDivElement | null>(null);
    const infoRefRef = useRef<HTMLDivElement | null>(null);
    const descriptionRef = useRef<HTMLDivElement | null>(null);

    return (
        <Container>
            <ProductDetailHeader
                defaultTap={null}
                reviewCount={10}
                reviewRef={reviewRef}
                infoRefRef={infoRefRef}
                inquiryRef={inquiryRef}
                descriptionRef={descriptionRef}
            />

            <div ref={descriptionRef} style={{ height: 1000 }}>
                descriptionRef
            </div>
            <div ref={infoRefRef} style={{ height: 1000 }}>
                infoRefRef
            </div>
            <div ref={reviewRef}>
                <ProductReview />
            </div>
            <div ref={inquiryRef}>
                <ProductInquire />
            </div>
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 1050px;
    margin-top: 50px;
    padding-bottom: 100px;
`;
