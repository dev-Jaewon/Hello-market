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
            <A href={props.path}>{props.value}</A>
        </ItemContainer>
    );
};

const ItemContainer = styled.li<Pick<ItemPropsType, "current">>`
    display: flex;
    justify-content: center;
    margin-top: 18px;
    width: 100%;
    height: 37px;
    font-size: 16px;
    font-weight: 700;
    white-space: nowrap;
    color: ${({ current }) => (current ? "var(--brand)" : "var(--black)")};
`;

const A = styled(Link)`
    color: inherit;
    height: fit-content;
    cursor: pointer;

    &:hover {
        color: var(--brand);
        text-decoration: unset;
        border-bottom: 1px solid var(--brand);
    }
`;
