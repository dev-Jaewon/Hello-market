import { rest } from "msw";

import carousel from "./data/carousel.json";
import recommededItems from "./data/recommenedList.json";
import product from "./data/product.json";

export const handlers = [
    rest.get("/carousel", (req, res, ctx) => {
        return res(ctx.delay(500), ctx.status(200), ctx.json(carousel));
    }),

    rest.get("/recommenedItems", (req, res, ctx) => {
        return res(ctx.status(200), ctx.json(recommededItems));
    }),

    rest.get("/product/1", (req, res, ctx) => {
        return res(ctx.status(200), ctx.json(product));
    }),
];
