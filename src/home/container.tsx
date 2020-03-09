import React, { useState } from "react";
import styled from "styled-components";

import { connect } from "react-redux";
import { FormattedMessage } from "react-intl";

import Footer from "../init/ui/custom/Footer";
import SearchEngineSelection, {
    ENGINE_OPT_ELASTIC_SEARCH,
} from "../init/ui/custom/SearchEngineSelection";
import mainLogo from "../img/logo.png";

import { MainContainer } from "../init/ui/containers";
import { AllowedLocale } from "../locale/types";
import { dispatchToggleLanguage } from "../locale/actions";
import SearchInput from "../init/ui/custom/SearchInput";
import { DefaultBtn } from "../init/ui/buttons";

const ContentWrapper = styled.form`
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Logo = styled.img`
    height: 135px;
    width: auto;
    margin-bottom: 1em;
`;

const BtnContainer = styled.div`
    margin-top: 1em;
`;

const Home = ({ toggleLanguage }: { toggleLanguage: Function }) => {
    const [searchEngineOption, setSearchEngineOption] = useState(
        ENGINE_OPT_ELASTIC_SEARCH
    );
    const [searchInput, setSearchInput] = useState("");

    return (
        <MainContainer>
            <ContentWrapper>
                <Logo src={mainLogo} alt="logo" />
                <SearchInput value={searchInput} onChange={setSearchInput} />
                <SearchEngineSelection
                    searchEngineOption={searchEngineOption}
                    setSearchEngineOption={setSearchEngineOption}
                />
                <BtnContainer>
                    <DefaultBtn type="submit">
                        <FormattedMessage id="search" />
                    </DefaultBtn>
                </BtnContainer>
            </ContentWrapper>
            <Footer toggleLanguage={toggleLanguage} />
        </MainContainer>
    );
};

const mapDispatchToProps = {
    toggleLanguage: dispatchToggleLanguage,
};

const mapStateToProps = ({ locale }: { locale: AllowedLocale }) => ({
    locale,
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
