import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { SearchEngineType } from "./types";
import { MidAlignedWrapper } from "../containers";
import { RadioBtn, RadioLabel } from "../form";

export const FIELD_NAME_SEARCH_ENGINE = "search_engine";
export const ENGINE_OPT_QUICKTHOUGHT: SearchEngineType = "quickthought";
export const ENGINE_OPT_ELASTIC_SEARCH: SearchEngineType = "elastic_search";

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
                id={ENGINE_OPT_QUICKTHOUGHT}
                type="radio"
                checked={searchEngineOption === ENGINE_OPT_QUICKTHOUGHT}
                onClick={() => {
                    setSearchEngineOption(ENGINE_OPT_QUICKTHOUGHT);
                }}
                readOnly
            />
            <RadioLabel htmlFor={ENGINE_OPT_QUICKTHOUGHT}>
                QuickThought
            </RadioLabel>
        </RadioSelectionWrapper>
        <RadioSelectionWrapper>
            <RadioBtn
                name={FIELD_NAME_SEARCH_ENGINE}
                id={ENGINE_OPT_ELASTIC_SEARCH}
                type="radio"
                checked={searchEngineOption === ENGINE_OPT_ELASTIC_SEARCH}
                onClick={() => {
                    setSearchEngineOption(ENGINE_OPT_ELASTIC_SEARCH);
                }}
                readOnly
            />
            <RadioLabel htmlFor={ENGINE_OPT_ELASTIC_SEARCH}>
                Elastic Search
            </RadioLabel>
        </RadioSelectionWrapper>
    </MidAlignedWrapper>
);

SearchEngineSelection.propTypes = {
    searchEngineOption: PropTypes.oneOf([
        ENGINE_OPT_QUICKTHOUGHT,
        ENGINE_OPT_ELASTIC_SEARCH,
    ]).isRequired,
    setSearchEngineOption: PropTypes.func.isRequired,
};

export default SearchEngineSelection;
