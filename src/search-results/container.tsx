import React, { useState } from "react";
import styled from "styled-components";

import mainLogo from "../img/logo.png";

import { MainContainer, MidAlignedWrapper } from "../init/ui/containers";
import { hintTextColour } from "../init/ui/colours";
import SearchEngineSelection, {
    RADIO_NAME_ELASTIC,
} from "../init/ui/custom/SearchEngineSelection";
import PoweredByCogent from "../init/ui/custom/PoweredByCogent";
import SearchInput from "../init/ui/custom/SearchInput";

const SEARCH_BAR_HEIGHT_PX = 125;

const TopBarWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 10px;
    height: ${SEARCH_BAR_HEIGHT_PX}px;
    position: fixed;
    border-bottom: 1px solid ${hintTextColour};
    width: calc(100vw - 20px);
`;

const SearchWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin-left: 1em;
`;

const ResultsWrapper = styled.div`
    margin-top: ${SEARCH_BAR_HEIGHT_PX}px;
`;

const Logo = styled.img`
    height: 65px;
    width: auto;
`;

const SearchResults = ({ results }: { results: Object[] }) => {
    const [searchEngineOption, setSearchEngineOption] = useState(
        RADIO_NAME_ELASTIC
    );
    const [searchInput, setSearchInput] = useState("");

    return (
        <MainContainer>
            <TopBarWrapper>
                <MidAlignedWrapper>
                    <Logo src={mainLogo} alt="logo" />
                    <SearchWrapper>
                        <SearchInput
                            value={searchInput}
                            onChange={setSearchInput}
                        />
                        <SearchEngineSelection
                            searchEngineOption={searchEngineOption}
                            setSearchEngineOption={setSearchEngineOption}
                        />
                    </SearchWrapper>
                </MidAlignedWrapper>
                <PoweredByCogent />
            </TopBarWrapper>
            <ResultsWrapper>results</ResultsWrapper>
        </MainContainer>
    );
};

export default SearchResults;
