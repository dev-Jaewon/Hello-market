import styled from "@emotion/styled";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { CATEGORY_LIST } from "../../../constance";

export const NavCategory = () => {
    const [categoryRender, setCategoryRender] = useState(false);

    return (
        <NavCategoryContainer
            onClick={() => setCategoryRender(true)}
            onMouseEnter={() => setCategoryRender(true)}
            onMouseLeave={() => setCategoryRender(false)}
        >
            <i aria-label="icon">
                <GiHamburgerMenu />
            </i>
            <p>카테고리</p>
            <CategoryListContainer render={categoryRender} role="categoryList">
                {CATEGORY_LIST.map((category) => (
                    <CategoryList key={category.value}>
                        {category.value}
                    </CategoryList>
                ))}
            </CategoryListContainer>
        </NavCategoryContainer>
    );
};

const NavCategoryContainer = styled.button`
    position: relative;
    display: flex;
    height: 100%;
    align-items: center;
    font-size: 18px;
    font-weight: 500;
    color: var(--black);
    gap: 10px;
    background-color: unset;
    border: none;

    i {
        transform: translate(0, 2px);
    }
`;

const CategoryListContainer = styled.ul<{ render: boolean }>`
    display: ${({ render }) => (render ? "flex" : "none")};
    position: absolute;
    flex-direction: column;
    left: 0;
    width: 250px;
    top: 100%;
    list-style: none;
    border: 1px solid rgb(221, 221, 221);
    background-color: rgb(255, 255, 255);
`;

const CategoryList = styled.li`
    padding: 7px 0px 9px 14px;
    cursor: pointer;

    &:hover {
        background-color: rgb(247, 247, 247);
    }
`;
