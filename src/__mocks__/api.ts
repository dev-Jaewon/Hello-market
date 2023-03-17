import { rest } from "msw";

import carousel from "./data/carousel.json";

export const handlers = [
    rest.get("/carousel", (req, res, ctx) => {
        return res(ctx.status(200), ctx.json(carousel));
    }),
];
