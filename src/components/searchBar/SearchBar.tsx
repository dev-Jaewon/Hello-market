import styled from "@emotion/styled";
import { ChangeEvent, useRef, useState } from "react";
import { SlMagnifier } from "react-icons/sl";
import { AiFillCloseCircle } from "react-icons/ai";

export const SearchBar = () => {
    const [inputValue, setInputValue] = useState<string>("");

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    const handleEraserButtonClick = () => {
        setInputValue("");
    };

    return (
        <SearchBarCointaer>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
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
        </SearchBarCointaer>
    );
};

const SearchBarCointaer = styled.div`
    display: flex;
    align-items: center;
    padding-left: 14px;
    width: 400px;
    height: 48px;
    border: 1px solid var(--brand);
    border-radius: 4px;

    .eraser {
        color: #c3c0c0;
        cursor: pointer;
    }

    input {
        flex: 1;
        border: unset;
        margin-right: 14px;
        font-size: 16px;

        &:focus {
            outline: none;
        }
    }

    i {
        width: 30px;
    }
`;
