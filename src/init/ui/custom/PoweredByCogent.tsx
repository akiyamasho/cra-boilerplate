import cogentLogo from "../../../img/cogent-logo.svg";
import React from "react";
import { MidAlignedWrapper } from "../containers";
import styled from "styled-components";

const Text = styled.span`
    font-size: 0.75em;
`;

const CogentLogo = styled.img`
    width: 120px;
    margin: 0 5px;
`;

const PoweredByCogent = () => (
    <MidAlignedWrapper>
        <Text>Powered By&nbsp;</Text>
        <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.cogent.co.jp/"
        >
            <CogentLogo src={cogentLogo} alt="Cogent Labs" />
        </a>
    </MidAlignedWrapper>
);

export default PoweredByCogent;
