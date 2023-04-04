import { useEffect, useRef, useState } from "react";
import styled from "@emotion/styled";
import Link from "next/link";

import { BsCart2, BsGithub } from "react-icons/bs";
import { NavItem } from "./nav/nav-item/NavItem";

import { MENUS } from "../constance";
import { NavCategory } from "./nav/nav-category/NavCategory";
import { SearchBar } from "./nav/searchBar/SearchBar";
import { MiniSearchBar } from "./nav/miniSearchBar/MiniSearchBar";
import { IconLink } from "./common/IconLink/IconLink";

export const Header = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const menusRef = useRef<HTMLDivElement>(null);
    const [scrollFold, setScrollFold] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (!menusRef.current || !containerRef.current) return;

            const rect = menusRef.current?.getBoundingClientRect();

            if (rect!.y < 0) {
                menusRef.current.style.position = "fixed";
                setScrollFold(true);
            } else {
                if (window.scrollY < containerRef.current.clientHeight) {
                    menusRef.current.style.position = "relative";
                    setScrollFold(false);
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <HeaderContainer ref={containerRef}>
            <HeaderArea>
                <AuthContainer>
                    <Link href={"/signup"}>회원가입</Link>
                    <Link href={"/signin"}>로그인</Link>
                </AuthContainer>
                <HeaderConcentsContainer>
                    <Link href={"/"} aria-label="헬로 메인 이동링크">
                        <img
                            src="https://hello-market.s3.ap-northeast-2.amazonaws.com/image/logo.png"
                            alt=""
                        />
                    </Link>
                    <SearchContainer>
                        <SearchBar />
                    </SearchContainer>
                    <IconLink
                        href={"/cart"}
                        size={25}
                        icon={BsCart2}
                        aria-label="카트이동"
                    />
                </HeaderConcentsContainer>
                <MenuContainerShadow ref={menusRef}>
                    <div>
                        <NavCategory />
                        <Menus
                            role="menuList"
                            scrollFold
                            aria-label="추천메뉴리스트"
                        >
                            {MENUS.map((menu) => (
                                <NavItem
                                    key={menu.value}
                                    path={menu.path}
                                    value={menu.value}
                                />
                            ))}
                        </Menus>
                        {!scrollFold ? (
                            <GithubButton
                                href="https://github.com/dev-Jaewon"
                                aria-label="깃허브이동"
                            >
                                <i>
                                    <BsGithub />
                                </i>
                                <span>GitHub</span>
                            </GithubButton>
                        ) : (
                            <>
                                <MiniSearchBar />
                                <IconLink
                                    href={"/cart"}
                                    size={25}
                                    icon={BsCart2}
                                    aria-label="카트이동"
                                />
                            </>
                        )}
                    </div>
                </MenuContainerShadow>
            </HeaderArea>
        </HeaderContainer>
    );
};

const HeaderContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 100vw;
`;

const HeaderArea = styled.section`
    display: flex;
    align-items: center;
    flex-direction: column;
    align-items: center;
    width: 100%;
`;

const MenuContainerShadow = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    width: 100%;
    box-shadow: rgb(0 0 0 / 7%) 0px 3px 4px 0px;
    transition: 1s;
    z-index: 100;
    background-color: white;

    & > div {
        display: flex;
        width: inherit;
        height: 56px;
        width: 1050px;
        justify-content: space-between;
        align-items: center;
    }
`;

const Menus = styled.ul<{ scrollFold: boolean }>`
    display: flex;
    justify-content: space-between;
    width: ${({ scrollFold }) => (scrollFold ? "600px" : "480px")};
`;

const AuthContainer = styled.div`
    display: flex;
    justify-content: end;
    align-items: center;
    width: 1050px;
    height: 36px;
    font-size: 12px;
    gap: 20px;

    a {
        color: #333;

        &:not(:last-child) {
            position: relative;

            &:after {
                position: absolute;
                display: flex;
                align-items: center;
                content: "";
                width: 13px;
                height: 12px;
                border-right: 1px solid rgb(217, 217, 217);
                right: -10px;
                top: 4px;
            }
        }
    }
`;

const HeaderConcentsContainer = styled.div`
    position: relative;
    display: flex;
    width: 1050px;
    justify-content: space-between;
    align-items: center;
    height: 63px;
`;

const SearchContainer = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

const GithubButton = styled.a`
    display: flex;
    padding: 2px 10px;
    align-items: center;
    border-radius: 18px;
    border: 1px solid rgb(238, 238, 238);
    gap: 10px;

    i {
        transform: translateY(15%);
    }
`;
