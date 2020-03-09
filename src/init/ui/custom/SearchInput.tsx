import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { hintTextColour } from "../colours";

const Container = styled.div`
    display: flex;
    width: 600px;
    padding-right: 15px;
    margin-bottom: 15px;
    border-radius: 30px;
    border: 1px solid ${hintTextColour};
`;

const Icon = styled.i`
    margin: 7.5px;
    color: ${hintTextColour};
    min-width: 35px;
    text-align: center;
    border-right: 1px solid ${hintTextColour};
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Input = styled.input`
    width: inherit;
    padding: 10px;
    outline: none;
    border: 0;
    transition: 0.1s ease-in;
    font-size: 1.25em;
`;

const SearchInput = ({
    value,
    onChange,
}: {
    value: string | undefined;
    onChange: Function;
}) => (
    <Container>
        <Icon className="material-icons">search</Icon>
        <Input
            type="text"
            onChange={evt => {
                onChange(evt.target.value);
            }}
            value={value}
            autoFocus
        />
    </Container>
);

SearchInput.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired,
};

SearchInput.defaultProps = {
    value: "",
};

export default SearchInput;
