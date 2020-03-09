import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import { FormattedMessage } from "react-intl";
import { TextBtn } from "../buttons";

import PoweredByCogent from "./PoweredByCogent";

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
            <PoweredByCogent />
        </FooterSection>
    </FooterContainer>
);

Footer.propTypes = {
    toggleLanguage: PropTypes.func.isRequired,
};

export default Footer;
