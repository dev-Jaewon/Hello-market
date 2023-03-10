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
