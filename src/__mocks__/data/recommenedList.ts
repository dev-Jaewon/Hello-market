import { faker } from "@faker-js/faker/locale/ko";

export const recommededItems = [...Array(5)].map((_) => {
    const product = faker.commerce.productName();
    const keyword = product.split(" ").at(-1);

    return {
        id: faker.datatype.uuid(),
        title: product,
        description: faker.commerce.productDescription(),
        list: [...Array(5)].map((_) => {
            const disCountRate = faker.datatype.number({
                min: 1,
                max: 30,
                precision: 5,
            });
            const beforeDiscountPrice = Number(
                faker.commerce.price(8000, 50000, 0)
            );

            return {
                // id: faker.datatype.uuid(),
                // name: faker.commerce.productName(),
                // description: faker.commerce.productDescription(),
                // imgUrl: faker.image.imageUrl(430, 550, keyword, true),
                // comentLength: 5,
                // disCountRate,
                // beforeDiscountPrice,
                // price: Math.floor(
                //     beforeDiscountPrice -
                //         beforeDiscountPrice * (0.01 * disCountRate)
                // ),

                id: faker.datatype.uuid(),
                name: "헬로우 마켓 마카롱",
                description: "쫀득하고 달콤한 마카롱",
                imgUrl: "https://pixabay.com/get/gd8b022ad94541d45cce8f52ced92163063546b0c23492dbbf6c5791b3f53330f11d907d6167796dd114921b11c007baafc7c856a95a732dc44c188c76df2f77f264753e96f8b2bc323bdc634d5379d29_640.jpg",
                comentLength: 255,
                disCountRate,
                beforeDiscountPrice,
                price: Math.floor(
                    beforeDiscountPrice -
                        beforeDiscountPrice * (0.01 * disCountRate)
                ),
            };
        }),
    };
});
