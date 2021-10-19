import styled from 'styled-components';
import { MediaQueries } from 'utilities/styles/Breakpoints';
import { LARGEST_HEADING_SIZE, LARGEST_MOBILE_HEADING_SIZE } from 'utilities/constants/Constants';

export const One =  styled.h1`
    font-family: ${props => props.theme.fonts.heading};
    font-size: ${`${LARGEST_MOBILE_HEADING_SIZE}px`};
    line-height: ${`${LARGEST_MOBILE_HEADING_SIZE}px`};
    font-weight: 700;
    ${({uppercase}) => uppercase && 'text-transform: uppercase'};

    ${MediaQueries.medium}{
        font-size: ${`${LARGEST_HEADING_SIZE}px`};
        line-height: ${`${LARGEST_HEADING_SIZE}px`};
    }
`;

export const Two =  styled.h2`
    font-family: ${props => props.theme.fonts.heading};
    font-size: ${`${LARGEST_MOBILE_HEADING_SIZE * 0.9}px`};
    line-height: ${`${LARGEST_MOBILE_HEADING_SIZE * 0.9}px`};
    ${({uppercase}) => uppercase && 'text-transform: uppercase'};

    ${MediaQueries.medium}{
        font-size: 30px;
        line-height: 31px;
    }
`;

export const Three =  styled.h3`
    font-family: ${props => props.theme.fonts.heading};
    font-size: ${`${LARGEST_MOBILE_HEADING_SIZE * 0.8}px`};
    line-height: ${`${LARGEST_MOBILE_HEADING_SIZE * 0.8}px`};
    ${({uppercase}) => uppercase && 'text-transform: uppercase'};

    ${MediaQueries.medium}{
        font-size: 26px;
        line-height: 28px;

    }
`;

export const Four =  styled.h4`
    font-family: ${props => props.theme.fonts.heading};
    font-size: ${`${LARGEST_MOBILE_HEADING_SIZE * 0.7}px`};
    line-height: ${`${LARGEST_MOBILE_HEADING_SIZE * 0.7}px`};
    ${({uppercase}) => uppercase && 'text-transform: uppercase'};

    ${MediaQueries.medium}{
        font-size: ${`${LARGEST_HEADING_SIZE * 0.7}px`};
        line-height: ${`${LARGEST_HEADING_SIZE * 0.7}px`};
    }
`;

export const Five =  styled.h5`
    font-family: ${props => props.theme.fonts.heading};
    font-size: ${`${LARGEST_MOBILE_HEADING_SIZE * 0.6}px`};
    line-height: ${`${LARGEST_MOBILE_HEADING_SIZE * 0.6}px`};
    ${({uppercase}) => uppercase && 'text-transform: uppercase'};

    ${MediaQueries.medium}{
        font-size: ${`${LARGEST_HEADING_SIZE * 0.6}px`};
        line-height: ${`${LARGEST_HEADING_SIZE * 0.6}px`};
    }
`;

export const Six =  styled.h6`
    font-family: ${props => props.theme.fonts.heading};
    font-size: ${`${LARGEST_MOBILE_HEADING_SIZE * 0.5}px`};
    line-height: ${`${LARGEST_MOBILE_HEADING_SIZE * 0.5}px`};
    ${({uppercase}) => uppercase && 'text-transform: uppercase'};

    ${MediaQueries.medium}{
        font-size: ${`${LARGEST_HEADING_SIZE * 0.5}px`};
        line-height: ${`${LARGEST_HEADING_SIZE * 0.5}px`};
    }
`;