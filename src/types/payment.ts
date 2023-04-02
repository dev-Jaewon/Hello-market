export type PaymentReady = {
    name: string;
    quantity: number;
    price: number;
};

export type ReqPaymentReady = Array<PaymentReady>;
