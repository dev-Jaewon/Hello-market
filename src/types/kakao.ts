export type Amount = {
    total: number;
    tax_free: number;
    vat: number;
    point: number;
    discount: number;
};

export type ReqKakaoPaymentReady = {
    productName: string;
    quantity: number;
    totalAmount: number;
    taxFreeAmount: number;
};

export type ResKakaoPaymentReady = {
    android_app_scheme: string;
    created_at: string;
    ios_app_scheme: string;
    next_redirect_app_url: string;
    next_redirect_mobile_url: string;
    next_redirect_pc_url: string;
    tid: string;
    tms_result: boolean;
};

export type ResKakaoPaymentApprove = {
    aid: string;
    approved_at: string;
    cid: string;
    created_at: string;
    item_name: string;
    partner_order_id: string;
    partner_user_id: string;
    payment_method_type: string;
    quantity: number;
    tid: string;
    amount: Amount;
};
