import styled from "styled-components/macro";
import Section from "components/elements/Section/Section";
import { MediaQueries } from "utilities/styles/Breakpoints";
import OuterContainer from "components/atoms/OuterContainer/OuterContainer";

export const StyledBanner = styled(Section)`
    overflow: hidden;
    min-height: 55vh;
    display: flex;
    align-items: center;
    padding-bottom: 0%;
    ${MediaQueries.medium}{
        min-height: 75vh;
    }
`;

export const BannerImage = styled.img`
    position: absolute;
    opacity: 0.1;
    width: 95%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
    ${MediaQueries.medium}{
        opacity: 1;
        transform: unset;
        left: unset;
        top: unset;
        width: 70%;
        right: 1%;
        bottom: 5%;
        height: 90%;
        object-fit: contain;
    }
`

export const BackgroundBannerText = styled.span`
    position: absolute;
    right: 2%;
    font-weight: bold;
    font-family: ${({theme}) => theme.fonts.heading};
    color: ${({theme}) => theme.colors.white};
    z-index: 1;
    font-size: 140px;
    line-height: 110px;

    ${MediaQueries.medium}{
        font-size: 200px;
        line-height: 160px;
    }
    ${MediaQueries.medium}{
        font-size: 300px;
        line-height: 222px;
        top: 10%;
    }
`;
