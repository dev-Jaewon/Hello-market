import { faker } from "@faker-js/faker/locale/ko";

export const review = (id: string) => {
    return {
        list: [...Array(40)].map((_) => {
            const imageUrl = faker.image.imageUrl(430, 550, "product", true);
            const createDate = faker.datatype.datetime({
                min: 1577836800000,
                max: 1893456000000,
            });

            return {
                id: faker.datatype.uuid(),
                productId: id,
                name: faker.commerce.productName(),
                author: faker.name.fullName(),
                content: faker.commerce.productDescription(),
                imageUrl,
                createDate: new Date(createDate).toISOString().split("T")[0],
            };
        }),
        next: Math.random() < 0.5 ? faker.datatype.uuid() : false,
    };
};
