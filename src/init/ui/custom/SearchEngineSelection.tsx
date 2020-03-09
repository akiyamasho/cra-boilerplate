import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { SearchEngineType } from "./types";
import { MidAlignedWrapper } from "../containers";
import { RadioBtn, RadioLabel } from "../form";

export const FIELD_NAME_SEARCH_ENGINE = "search_engine";
export const RADIO_NAME_QUICKTHOUGHT: SearchEngineType = "quickthought";
export const RADIO_NAME_ELASTIC: SearchEngineType = "elastic_search";

const RadioSelectionWrapper = styled(MidAlignedWrapper)`
    padding: 0 1em;
`;

const SearchEngineSelection = ({
    searchEngineOption,
    setSearchEngineOption,
}: {
    searchEngineOption: SearchEngineType;
    setSearchEngineOption: Function;
}) => (
    <MidAlignedWrapper>
        <RadioSelectionWrapper>
            <RadioBtn
                name={FIELD_NAME_SEARCH_ENGINE}
                id={RADIO_NAME_QUICKTHOUGHT}
                type="radio"
                checked={searchEngineOption === RADIO_NAME_QUICKTHOUGHT}
                onClick={() => {
                    setSearchEngineOption(RADIO_NAME_QUICKTHOUGHT);
                }}
                readOnly
            />
            <RadioLabel htmlFor={RADIO_NAME_QUICKTHOUGHT}>
                QuickThought
            </RadioLabel>
        </RadioSelectionWrapper>
        <RadioSelectionWrapper>
            <RadioBtn
                name={FIELD_NAME_SEARCH_ENGINE}
                id={RADIO_NAME_ELASTIC}
                type="radio"
                checked={searchEngineOption === RADIO_NAME_ELASTIC}
                onClick={() => {
                    setSearchEngineOption(RADIO_NAME_ELASTIC);
                }}
                readOnly
            />
            <RadioLabel htmlFor={RADIO_NAME_ELASTIC}>Elastic Search</RadioLabel>
        </RadioSelectionWrapper>
    </MidAlignedWrapper>
);

SearchEngineSelection.propTypes = {
    searchEngineOption: PropTypes.oneOf([
        RADIO_NAME_QUICKTHOUGHT,
        RADIO_NAME_ELASTIC,
    ]).isRequired,
    setSearchEngineOption: PropTypes.func.isRequired,
};

export default SearchEngineSelection;
