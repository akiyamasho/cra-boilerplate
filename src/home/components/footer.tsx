import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import { FormattedMessage } from "react-intl";
import { TextBtn } from "../../init/ui/buttons";

import cogentLogo from "../../img/cogent-logo.svg";

const FooterContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const FooterSection = styled.div`
    display: flex;
    align-items: center;
    padding: 1em 2em;
`;

const PoweredBy = styled.span`
    font-size: 0.75em;
`;

const CogentLogo = styled.img`
    width: 120px;
    margin: 0 5px;
`;

const Footer = ({ toggleLanguage }: { toggleLanguage: Function }) => (
    <FooterContainer>
        <FooterSection>
            <TextBtn
                onClick={() => {
                    toggleLanguage();
                }}
            >
                <FormattedMessage id="toggleLanguage" />
            </TextBtn>
        </FooterSection>
        <FooterSection>
            <PoweredBy>Powered By&nbsp;</PoweredBy>
            <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.cogent.co.jp/"
            >
                <CogentLogo src={cogentLogo} alt="Cogent Labs" />
            </a>
        </FooterSection>
    </FooterContainer>
);

Footer.propTypes = {
    toggleLanguage: PropTypes.func.isRequired,
};

export default Footer;
