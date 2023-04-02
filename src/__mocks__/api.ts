import { rest } from "msw";
import { carousel } from "./data/carousel";
import { kakaoApprove } from "./data/kakaoPayment";

const { kakaoPayment } = require("./data/kakaoPayment");
const { recommededItems } = require("./data/recommenedList");
const { product } = require("./data/product");
const { review } = require("./data/review");
const { getInquire, postInquire } = require("./data/inquire");
const { getCartMock } = require("./data/cart");

export const handlers = [
    rest.get("/carousel", (req, res, ctx) => {
        return res(
            ctx.delay(500),
            ctx.status(200),
            ctx.json({ result: carousel })
        );
    }),

    rest.get("/recommenedItems", (req, res, ctx) => {
        return res(ctx.status(200), ctx.json({ result: recommededItems }));
    }),

    rest.get("/product/:id", (req, res, ctx) => {
        const productId = req.params.id;
        return res(ctx.status(200), ctx.json({ result: product(productId) }));
    }),

    rest.get("/review/:id", (req, res, ctx) => {
        const productId = req.params.id;
        return res(ctx.status(200), ctx.json({ result: review(productId) }));
    }),

    rest.get("/inquire/:id", (req, res, ctx) => {
        const productId = req.params.id;
        return res(
            ctx.status(200),
            ctx.json({ result: getInquire(productId) })
        );
    }),

    rest.post("/inquire", async (req, res, ctx) => {
        const data = await req.json();
        return res(ctx.status(200), ctx.json({ result: postInquire(data) }));
    }),

    rest.get("/cart", async (req, res, ctx) => {
        return res(ctx.status(200), ctx.json({ result: getCartMock() }));
    }),

    rest.delete("/cart/:id", async (req, res, ctx) => {
        const id = req.params.id;
        return res(ctx.status(200));
    }),

    rest.post("/payment", async (req, res, ctx) => {
        const orderlist = await req.json();

        const getKakaoData = await kakaoPayment(orderlist);
        return res(ctx.status(200), ctx.json({ ...getKakaoData.data }));
    }),

    rest.post("/payment/approve", async (req, res, ctx) => {
        const data = await req.json();

        const getKakaoData = await kakaoApprove(data);
        return res(ctx.status(200), ctx.json({ ...getKakaoData.data }));
    }),
];
