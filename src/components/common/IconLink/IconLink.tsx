import styled from "@emotion/styled";
import Link from "next/link";
import { IconType } from "react-icons/lib";

export type IconLinkProps = {
    href: string;
    size?: number;
    icon: IconType;
    "aria-label"?: string;
};

export const IconLink = (props: IconLinkProps) => {
    return (
        <IconContainer>
            <Link href={props.href} aria-label={props["aria-label"]}>
                <i className="cart" role="">
                    <props.icon size={props.size} />
                </i>
            </Link>
        </IconContainer>
    );
};

const IconContainer = styled.div`
    i {
        color: var(--black);

        &:hover {
            cursor: pointer;
            color: var(--brand);
        }
    }
`;
