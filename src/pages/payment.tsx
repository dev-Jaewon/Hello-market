import { useEffect } from "react";
import { useRouter } from "next/router";
import { postPaymentApprove } from "../utils/api";

const Payment = () => {
    const router = useRouter();

    const paymentApprove = async () => {
        const { pg_token } = router.query;
        const tid = localStorage.getItem("user-tid");

        if (pg_token && typeof pg_token === "string" && tid) {
            const { data } = await postPaymentApprove({ pg_token, tid });
            router.push(`/order/success`, {
                query: {
                    orderId: data.partner_order_id,
                },
            });
        }
    };

    useEffect(() => {
        paymentApprove();
    });
};

export default Payment;
