import { useRouter } from "next/router";
import styled from "@emotion/styled";
import axios from "axios";
import { useEffect, useState } from "react";

import {
    ProductOrder,
    ProductOrderType,
} from "../../components/productOrder/productOrder";
import { ProductDetail } from "../../components/productDetail/ProductDetail";

const ProductPage = () => {
    const { id } = useRouter().query;
    const [orderInfo, setOrderInfo] = useState<ProductOrderType | null>(null);

    useEffect(() => {
        if (!id || orderInfo) return;

        (async () => {
            const urls = [`/product/${id}`];

            const responses = await Promise.allSettled(
                urls.map((url) => axios.get(url))
            );

            responses.forEach((res) => {
                if (res.status === "fulfilled") {
                    const { data, config } = res.value;

                    if (config.url === `/product/${id}`) {
                        setOrderInfo(data.result);
                    }
                } else {
                    console.error(res.reason.message);
                }
            });
        })();
    }, [id]);

    return (
        <Container>
            {orderInfo && (
                <Container>
                    <ProductOrder {...orderInfo} />
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
