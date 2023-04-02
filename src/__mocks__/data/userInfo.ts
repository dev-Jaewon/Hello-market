import { faker as f } from "@faker-js/faker/locale/ko";
import { UserInfoType } from "../../store/reducer/user";

const address = [...Array(3)].map((_, i) => ({
    default: !i ? true : false,
    selected: !i ? true : false,
    value: f.address.cityName() + f.address.street(),
    placeToPut: "문앞",
    doorPassword: "1234",
    phoneNumber: f.phone.number(),
    receiver: f.name.fullName(),
}));

export const getUserInfo: UserInfoType = {
    id: "ddw00144",
    name: f.name.fullName(),
    phone: f.phone.number(),
    email: "test@gmail.com",
    address,
    payment: "kakao",
};
