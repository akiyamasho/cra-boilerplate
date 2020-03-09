import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { hintTextColour, secondaryTextColour } from "../colours";

const Container = styled.div`
    display: flex;
    width: 100%;
    margin-bottom: 15px;
    border-radius: 10px;
    border: 1px solid ${secondaryTextColour};
`;

const Icon = styled.i`
    padding: 10px;
    color: ${secondaryTextColour};
    min-width: 50px;
    text-align: center;
    border-right: 1px solid ${hintTextColour};
`;

const Input = styled.input`
    width: 100%;
    padding: 10px;
    outline: none;
    border: 0;
    transition: 0.1s ease-in;
`;

const SearchInput = ({
    value,
    onChange,
}: {
    value: string | undefined;
    onChange: Function;
}) => (
    <Container>
        <Icon className="material-icons" />
        <Input
            type="text"
            onChange={evt => {
                onChange(evt.target.value);
            }}
            value={value}
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
