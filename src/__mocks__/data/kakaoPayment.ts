import { ReqPaymentReady } from "../../types/payment";

const axios = require("axios");

export const kakaoPayment = async (orderList: ReqPaymentReady) => {
    let item_name, quantity, total_amount;

    const [header, ...rest] = orderList;

    item_name = header.name;
    quantity = header.quantity;
    total_amount = header.price;

    if (rest.length) {
        item_name += `외 ${rest.length}종`;
        quantity += rest.reduce((sum, cur) => sum + cur.quantity, 0);
        total_amount += rest.reduce((sum, cur) => sum + cur.price, 0);
    }

    return await axios.post(
        "https://kapi.kakao.com/v1/payment/ready",
        {
            cid: "TC0ONETIME",
            partner_order_id: "a",
            partner_user_id: "b",
            item_name,
            quantity,
            total_amount,
            tax_free_amount: 0,
            approval_url: "http://localhost:3000/payment",
            cancel_url: "http://localhost:3000/",
            fail_url: "http://localhost:3000/",
        },
        {
            headers: {
                Authorization: `KakaoAK ce6784e3678343f823facf56c5c1296d`,
                "Content-type": `application/x-www-form-urlencoded;charset=utf-8`,
            },
        }
    );
};

export const kakaoApprove = async (data: { uid: string; pg_token: string }) => {
    return await axios.post(
        "https://kapi.kakao.com/v1/payment/approve",
        {
            cid: "TC0ONETIME",
            tid: "a",
            partner_order_id: "a",
            partner_user_id: "b",
            ...data,
        },
        {
            headers: {
                Authorization: `KakaoAK ce6784e3678343f823facf56c5c1296d`,
                "Content-type": `application/x-www-form-urlencoded;charset=utf-8`,
            },
        }
    );
};
