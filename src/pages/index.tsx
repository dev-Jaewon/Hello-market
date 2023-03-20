import { useEffect, useState } from "react";
import styled from "@emotion/styled";
import axios from "axios";

import { Carousel } from "../components/carousel/Carousel";
import {
    RecommendedList,
    RecommendedListType,
    SkeletonRecommendedList,
} from "../components/recommendedList/RecommendedList";
import { Skeleton } from "../components/common/Skeleton/Skeleton";

function Home() {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [carouselList, setCarouselList] = useState<string[]>([]);
    const [recommenededItems, setRecommenededItems] = useState<
        RecommendedListType[]
    >([]);

    useEffect(() => {
        (async () => {
            const urls = ["/carousel", "/recommenedItems"];

            const responses = await Promise.allSettled(
                urls.map((url) => axios.get(url))
            );

            responses.forEach((res) => {
                if (res.status === "fulfilled") {
                    const { data, config } = res.value;

                    if (config.url === "/carousel") {
                        setCarouselList(data.result);
                    }

                    if (config.url === "/recommenedItems") {
                        setRecommenededItems(data.result);
                    }
                } else {
                    console.error(res.reason.message);
                }
            });
            setIsLoading(false);
        })();
    }, []);

    return (
        <Container>
            {isLoading ? (
                <>
                    <Skeleton width="1550" height="370" />
                    {[...Array(3)].map((_) => (
                        <SkeletonRecommendedList />
                    ))}
                </>
            ) : (
                <>
                    <Carousel list={carouselList} />
                    {recommenededItems.map((item, i) => {
                        return (
                            <RecommenedProductContainer key={i}>
                                <RecommendedList {...item} />
                            </RecommenedProductContainer>
                        );
                    })}
                </>
            )}
        </Container>
    );
}

export default Home;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    height: 100%;
`;

const RecommenedProductContainer = styled.div`
    margin: 40px 0;
`;
