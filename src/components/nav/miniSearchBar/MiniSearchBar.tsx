import styled from "@emotion/styled";
import { ChangeEvent, useState } from "react";
import { SlMagnifier } from "react-icons/sl";
import { AiFillCloseCircle } from "react-icons/ai";

export const MiniSearchBar = () => {
    const [inputValue, setInputValue] = useState<string>("");

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    const handleEraserButtonClick = () => {
        setInputValue("");
    };

    return (
        <Container>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                placeholder="검색어를 입력해주세요"
            />
            {inputValue && (
                <i
                    role="eraser"
                    className="eraser"
                    onClick={handleEraserButtonClick}
                >
                    <AiFillCloseCircle />
                </i>
            )}

            <i role="magnifier">
                <SlMagnifier size={"20px"} />
            </i>
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    align-items: center;
    width: 242px;
    height: 36px;
    display: flex;
    border-radius: 6px;
    background-color: rgb(247, 247, 247);
    padding-left: 10px;

    i {
        flex-basis: 30px;
        width: 30px;
        margin-left: auto;
    }

    .eraser {
        color: #c3c0c0;
        cursor: pointer;
    }

    input {
        border: unset;
        font-size: 16px;
        background-color: inherit;

        &:focus {
            outline: none;
        }
    }
`;
