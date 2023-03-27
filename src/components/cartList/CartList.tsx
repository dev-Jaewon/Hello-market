import styled from "@emotion/styled";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../store";
import { cartState, setChecked, setQuantity } from "../../store/reducer/cart";
import { IoMdClose } from "react-icons/io";
import { deleteCart } from "../../store/actions/cart";
import Link from "next/link";
import { Counter } from "../common/Counter/Counter";
import { addCommaToNumber } from "../../utils/utils";
import { Check } from "../common/Check/Check";
import { ChangeEvent, useMemo } from "react";

export const CartList = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { list } = useSelector(cartState);

    const handleDeleteClick = (id: string) => {
        dispatch(deleteCart(id));
    };

    const handleQuantityChange = (quantity: number, id: string) => {
        dispatch(
            setQuantity(
                list.map((item) =>
                    item.id === id
                        ? {
                              ...item,
                              quantity,
                          }
                        : item
                )
            )
        );
    };

    const allChecked = useMemo(
        () => list && list.every((item) => item.checked),
        [list]
    );

    const handleCheckChange = (
        e: ChangeEvent<HTMLInputElement>,
        id: string
    ) => {
        const setList = list.map((item) =>
            item.id === id ? { ...item, checked: !item.checked } : item
        );

        dispatch(setChecked(setList));
    };

    const handleAllCheckChange = () => {
        const setList = list.map((item) => ({ ...item, checked: !allChecked }));
        dispatch(setChecked(setList));
    };

    return (
        <Container>
            <AllCheckButton>
                <Check
                    id="toggle-all-product"
                    checked={allChecked}
                    onChange={handleAllCheckChange}
                    aria-label="전체 선택 체크박스"
                >
                    <div>전체선택</div>
                    <div>{`(${list.filter((item) => item.checked).length}/${
                        list.length
                    })`}</div>
                </Check>
            </AllCheckButton>
            {list.map((item) => (
                <Item key={item.id}>
                    <Check
                        id={item.id}
                        value={item.id}
                        checked={item.checked}
                        onChange={(e) => handleCheckChange(e, item.id)}
                    />
                    <img src={item.thumnailImgUrl} alt={item.name + "이미지"} />
                    <ProductName href={`/product/${item.id}`}>
                        {item.name}
                    </ProductName>
                    <Counter
                        value={item.quantity}
                        onChange={(e) => handleQuantityChange(e, item.id)}
                    />
                    <Price>
                        {addCommaToNumber(item.price * item.quantity)}
                    </Price>
                    <Icon
                        onClick={() => handleDeleteClick(item.id)}
                        aria-label="삭제 버튼"
                    >
                        <IoMdClose color="rgb(198, 197, 197)" />
                    </Icon>
                </Item>
            ))}
        </Container>
    );
};

const Container = styled.section`
    width: 742px;

    img {
        width: 60px;
        height: 80px;
    }
`;

const Item = styled.div`
    display: flex;
    align-items: center;
    padding: 20px 0;
    border-bottom: 1px solid rgb(242, 242, 242);
    user-select: none;
`;

const ProductName = styled(Link)`
    flex: 1 1;
    margin-left: 20px;
    font-weight: 500;
    font-size: 16px;
    color: var(--black);

    &:hover {
        text-decoration: none;
    }
`;

const Price = styled.span`
    width: 127px;
    text-align: end;
    font-weight: 700;
    font-size: 16px;
    color: var(--black);
`;

const Icon = styled.i`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 35px;
    height: 35px;
    cursor: pointer;
`;

const AllCheckButton = styled.div`
    display: flex;
    gap: 10px;
    padding-bottom: 10px;
    border-bottom: 1px solid var(--black);
    font-size: 14px;
    color: var(--black);

    div {
        display: flex;
        align-items: center;
        font-weight: 700;
    }
`;
