import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import { FormattedMessage } from "react-intl";

import { hintTextColour, secondaryTextColour } from "../../init/ui/colours";
import { SEARCH_INPUT_WIDTH_PX } from "../../init/ui/custom/SearchInput";

export const SMALL_LOGO_WIDTH_PX = 160;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: ${SEARCH_INPUT_WIDTH_PX}px;
    margin-left: ${SMALL_LOGO_WIDTH_PX}px;
    padding: 1em;
`;

const FolderPath = styled.div`
    font-size: 0.85em;
    color: ${secondaryTextColour};
`;

const FileName = styled.a`
    font-size: 1.5em;
    color: #3974b7;
    cursor: pointer;
    transition: 0.1s ease-in;

    &:hover {
        color: #4f89cb;
    }
`;

const LastUpdated = styled.div`
    font-size: 0.85em;
    color: ${hintTextColour};
`;

const Content = styled.div`
    margin-top: 1em:
`;

const Result = ({
    path,
    lastUpdatedDate,
    content,
    matches,
}: {
    path: string;
    lastUpdatedDate: string;
    content: string;
    matches: string[];
}) => {
    return (
        <Container>
            <FolderPath>{path}</FolderPath>
            <FileName>{path}</FileName>
            <LastUpdated>
                <FormattedMessage id="lastUpdatedDate" />
                {lastUpdatedDate}
            </LastUpdated>
            <Content>{content}</Content>
        </Container>
    );
};

Result.propTypes = {
    path: PropTypes.string.isRequired,
    lastUpdatedDate: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    matches: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Result;
