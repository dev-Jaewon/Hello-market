import styled from "@emotion/styled";
import { useState } from "react";
import { useSelector } from "react-redux";
import { cartState } from "../../store/reducer/cart";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";
import { addCommaToNumber } from "../../utils/utils";

export const OrderProduct = () => {
    const { list } = useSelector(cartState);
    const [folded, setFolded] = useState(true);

    const checkedItemList = list.filter((item) => item.checked);

    const handleFoldClick = () => {
        setFolded((preV) => !preV);
    };

    return (
        <Container>
            <OrderProductHeader>
                <h2>주문상품</h2>
                {!folded ? (
                    <i
                        onClick={handleFoldClick}
                        aria-label={"리스트 접는 아이콘"}
                    >
                        <SlArrowDown />
                    </i>
                ) : (
                    <i
                        onClick={handleFoldClick}
                        aria-label={"리스트 펼치는 아이콘"}
                    >
                        <SlArrowUp />
                    </i>
                )}
            </OrderProductHeader>
            <ListContainer>
                {!folded ? (
                    checkedItemList.map((item) => (
                        <OpenItem key={item.id}>
                            <img
                                src={item.thumnailImgUrl}
                                alt={`${item.name} 사진`}
                            />
                            <div className="name">{item.name}</div>
                            <div className="quantity">{item.quantity}개</div>
                            <div className="price">{`${addCommaToNumber(
                                item.price
                            )}원`}</div>
                        </OpenItem>
                    ))
                ) : (
                    <FoldItem>
                        <p>
                            {checkedItemList[0].name}{" "}
                            {checkedItemList.length > 1 &&
                                `외 ${checkedItemList.length - 1}개 `}
                            상품을 주문합니다.
                        </p>
                    </FoldItem>
                )}
            </ListContainer>
        </Container>
    );
};

const Container = styled.section`
    display: flex;
    flex-direction: column;
    width: 1050px;
    user-select: none;
`;

const OrderProductHeader = styled.div`
    display: flex;
    justify-content: space-between;
    padding-bottom: 15px;

    i {
        cursor: pointer;
    }
`;

const ListContainer = styled.ul`
    border-top: 1px solid rgb(51, 51, 51);
`;

const FoldItem = styled.li`
    display: flex;
    justify-content: center;
    gap: 5px;
    padding: 25px 0;
    border-bottom: 1px solid rgb(244, 244, 244);
`;

const OpenItem = styled.li`
    display: flex;
    align-items: center;
    padding: 25px 0;
    border-bottom: 1px solid rgb(244, 244, 244);

    img {
        width: 60px;
        height: 80px;
    }

    .name {
        flex: 1 1;
        padding: 0 20px;
    }

    .quantity {
        width: 100px;
    }

    .price {
        width: 130px;
        text-align: right;
        font-weight: 700;
    }
`;
