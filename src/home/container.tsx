import React, { useState } from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import Footer from "./components/footer";
import mainLogo from "../img/logo.png";

import { MainContainer, MidAlignedWrapper } from "../init/ui/containers";
import { RadioBtn, RadioLabel } from "../init/ui/form";
import { AllowedLocale } from "../locale/types";
import { dispatchToggleLanguage } from "../locale/actions";

const ContentWrapper = styled.form`
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Logo = styled.img`
    height: 200px;
    width: auto;
`;

const RadioSelectionWrapper = styled(MidAlignedWrapper)`
    padding: 0 2em;
`;

const FIELD_NAME_SEARCH_ENGINE = "search_engine";
const RADIO_NAME_QUICKTHOUGHT = "quickthought";
const RADIO_NAME_ELASTIC = "elastic_search";

const Home = ({ toggleLanguage }: { toggleLanguage: Function }) => {
    const [searchEngineOption, setSearchEngineOption] = useState(
        RADIO_NAME_ELASTIC
    );

    return (
        <MainContainer>
            <ContentWrapper>
                <Logo src={mainLogo} />
                <MidAlignedWrapper>
                    <RadioSelectionWrapper>
                        <RadioBtn
                            name={FIELD_NAME_SEARCH_ENGINE}
                            id={RADIO_NAME_QUICKTHOUGHT}
                            type="radio"
                            checked={
                                searchEngineOption === RADIO_NAME_QUICKTHOUGHT
                            }
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
                        <RadioLabel htmlFor={RADIO_NAME_ELASTIC}>
                            Elastic Search
                        </RadioLabel>
                    </RadioSelectionWrapper>
                </MidAlignedWrapper>
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
