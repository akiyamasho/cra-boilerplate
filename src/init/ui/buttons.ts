import styled from "styled-components";
import {
    buttonBgColour,
    buttonBgDisabledColour,
    buttonBgHoverColour,
    buttonTextColour,
    buttonTextDisabledColour,
    hintTextColour,
    secondaryTextColour,
} from "./colours";

export const DefaultBtn = styled.button`
    letter-spacing: 1px;
    text-transform: none;
    background: ${buttonBgColour};
    color: ${buttonTextColour};
    border: none;
    cursor: pointer;
    transition: 0.1s ease-in;
    box-shadow: 0 4px 6px 0 rgba(50, 50, 93, 0.1),
        0 1px 3px 0 rgba(0, 0, 0, 0.08);
    font-size: 1em;
    padding: 0.25em 0.5em;
    border-radius: 5px;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 90px;
    height: 30px;

    &:disabled {
        background: ${buttonBgDisabledColour};
        color: ${buttonTextDisabledColour};
        cursor: initial;
        pointer-events: none;
    }

    &:hover:not(:disabled) {
        background: ${buttonBgHoverColour};
    }

    &:focus {
        outline: none;
    }

    i {
        font-size: 1.15em;
    }
`;

export const TextBtn = styled.button`
    background: none;
    height: 25px; /* to prevent snapping */
    color: ${secondaryTextColour};
    border: none;
    cursor: pointer;
    transition: 0.1s ease-in;
    display: flex;
    align-items: center;
    font-size: 0.85em;

    &:hover:not(:disabled) {
        color: ${hintTextColour};
    }

    &:focus {
        outline: none;
    }
`;
