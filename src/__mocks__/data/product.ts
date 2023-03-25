import { faker } from "@faker-js/faker/locale/ko";

export const product = (id: string) => {
    const disCountRate = faker.datatype.number({
        min: 1,
        max: 30,
        precision: 5,
    });
    const beforeDiscountPrice = Number(faker.commerce.price(8000, 50000, 0));

    return {
        id,
        name: faker.commerce.productName(),
        description: faker.commerce.productDescription(),
        thumnailImgUrl: faker.image.imageUrl(430, 550, "product", true),
        packagingType: "종이포장",
        weight: "1kg내외",
        countryOfOrigin: "한국",
        each: "1봉",
        seller: "헬로우",
        disCountRate,
        beforeDiscountPrice,
        price: Math.floor(
            beforeDiscountPrice - beforeDiscountPrice * (0.01 * disCountRate)
        ),
    };
};
