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
                id: faker.datatype.uuid(),
                name: faker.commerce.productName(),
                description: faker.commerce.productDescription(),
                imgUrl: faker.image.imageUrl(430, 550, keyword, true),
                comentLength: 5,
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
