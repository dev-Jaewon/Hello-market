import styled from "@emotion/styled";
import Link from "next/link";

export type ItemPropsType = {
    path: string;
    value: string;
    current?: boolean;
};

export const NavItem = (props: ItemPropsType) => {
    return (
        <ItemContainer current={props.current}>
            <Test href={props.path}>{props.value}</Test>
        </ItemContainer>
    );
};

const ItemContainer = styled.li<Pick<ItemPropsType, "current">>`
    display: flex;
    justify-content: center;
    margin-top: 18px;
    width: 150px;
    height: 37px;
    font-size: 16px;
    font-weight: 700;
    color: ${({ current }) => (current ? "var(--brand)" : "var(--black)")};
`;

const Test = styled(Link)`
    height: fit-content;
    cursor: pointer;

    &:hover {
        color: var(--brand);
        border-bottom: 1px solid var(--brand);
    }
`;
