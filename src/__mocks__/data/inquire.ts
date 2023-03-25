import { faker } from "@faker-js/faker/locale/ko";

export const getInquire = (productId: string) => {
    const createDate = faker.datatype.datetime({
        min: 1577836800000,
        max: 1893456000000,
    });

    return {
        list: [...Array(20)].map((_) => {
            return {
                id: faker.datatype.uuid(),
                name: faker.commerce.product(),
                author: faker.name.fullName(),
                content: faker.commerce.productDescription(),
                answered: Math.random() < 0.5 ? faker.datatype.uuid() : false,
                createDate: new Date(createDate).toISOString().split("T")[0],
                answerContent: faker.commerce.productDescription(),
            };
        }),
    };
};

export type reqPostInquire = { name: string; content: string };
export const postInquire = (data: reqPostInquire) => {
    return {
        ...data,
        id: faker.datatype.uuid(),
        auth: faker.name.fullName(),
        createDate: new Date().toISOString().split("T")[0],
        answered: false,
        answerContent: "",
    };
};
