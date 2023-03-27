export const validations = {
    id: {
        pattern: [
            {
                value: "^[A-Za-z0-9]{6,16}$",
                message: "6자 이상 16자 이하의 영문 혹은 영문과 숫자를 조합",
            },
        ],
    },
    password: {
        pattern: [
            {
                value: "^(?=.*[a-zA-Z0-9])(?=.*[a-zA-Z!@#$%^&*])(?=.*[0-9!@#$%^&*]).{2,}$",
                message:
                    "영문/숫자/특수문자(공백 제외)만 허용하며, 2개 이상 조합",
            },
            {
                value: "^.{10,}$",
                message: "최소 10자 이상 입력",
            },
        ],
    },
    name: {
        pattern: [
            {
                value: "^[a-zA-Z가-힣]+$",
                message: "이름을 입력해 주세요.",
            },
        ],
    },
    email: {
        pattern: [
            {
                value: "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$",
                message: "이메일을 형식으로 입력해주세요.",
            },
        ],
    },
    phone: {
        pattern: [
            {
                value: "^[0-9]*$",
                message: "숫자만 입력해주세요.",
            },
        ],
    },
};

export const MENUS = [
    { path: "", value: "신상품" },
    { path: "", value: "베스트" },
    { path: "", value: "알뜰쇼핑" },
    { path: "", value: "특가/혜택" },
];

export const CATEGORY_LIST = [
    {
        icon: "",
        value: "채소",
    },
    {
        icon: "",
        value: "과일·견과·쌀",
    },
];

export const ORDER_NOTIFIE_CATION = [
    "본 사이트는 포트폴리오로 작성된 사이트입니다.",
    "본 사이트에서는 쿠폰기능이 없습니다.",
    "[주문완료] 상태일 경우에만 주문 취소가 가능합니다",
    "테스트를 위한 사이트입니다",
];
