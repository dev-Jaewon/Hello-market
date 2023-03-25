import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { AppDispatch } from "../../store";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    getInquires,
    getProduct,
    getReviews,
} from "../../store/actions/product";
import { productState } from "../../store/reducer/product";

import { ProductOrder } from "../../components/productOrder/productOrder";
import { ProductDetail } from "../../components/productDetail/ProductDetail";

const ProductPage = () => {
    const dispatch = useDispatch<AppDispatch>();

    const { id } = useRouter().query;
    const { product } = useSelector(productState);

    useEffect(() => {
        if (!id || product.id) return;
        dispatch(getReviews(id as string));
        dispatch(getProduct(id as string));
        dispatch(getInquires(id as string));
    }, [id]);

    return (
        <Container>
            {product.id && (
                <Container>
                    <ProductOrder {...product} />
                    <ProductDetail />
                </Container>
            )}
        </Container>
    );
};

export default ProductPage;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin: 30px 0;
    width: 100%;
`;
