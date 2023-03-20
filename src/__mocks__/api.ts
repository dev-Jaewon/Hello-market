import { rest } from "msw";

import carousel from "./data/carousel.json";
import recommededItems from "./data/recommenedList.json";

export const handlers = [
    rest.get("/carousel", (req, res, ctx) => {
        return res(ctx.delay(500), ctx.status(200), ctx.json(carousel));
    }),

    rest.get("/recommenedItems", (req, res, ctx) => {
        return res(ctx.status(200), ctx.json(recommededItems));
    }),
];
