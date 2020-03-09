import styled from "styled-components";
import { mainTextColour, secondaryTextColour, themeColour } from "./colours";

export const RadioBtn = styled.input`
    width: 15px;
    height: 15px;
    border-radius: 15px;
    top: -2px;
    left: -1px;
    position: relative;
    background-color: ${mainTextColour};
    content: "";
    display: inline-block;
    visibility: visible;
    border: 2px solid white;

    &:checked:after {
        width: 15px;
        height: 15px;
        border-radius: 15px;
        left: -2px;
        position: relative;
        background-color: ${themeColour};
        content: "";
        display: inline-block;
        visibility: visible;
        border: 2px solid ${themeColour};
    }
`;

export const RadioLabel = styled.label`
    margin-left: 5px;
    color ${secondaryTextColour};
    cursor: pointer;
    user-select: none;
`;
