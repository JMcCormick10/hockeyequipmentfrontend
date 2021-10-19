import styled from "styled-components/macro";
import QuickSearch from "components/molecules/QuickSearch/QuickSearch";
import { FONT_SIZES } from "utilities/constants/Constants";

export const StyledSelectContainer = styled.div`
    width: 100%;
    overflow: hidden;
    position: relative;

    ${({customArrow, arrowColor, theme}) => `
        ${customArrow && `
            svg{
                color: ${arrowColor ? theme.colors.arrowColor : theme.colors.yellow};
                position: absolute;
                right: 5px;
                top: 50%;
                transform: translateY(-50%);
            }
        `}
    `} 
`;

export const StyledSelect = styled.select`

    width: 100%;
    padding: 5px;
    font-size: ${FONT_SIZES.inputs};
    ${QuickSearch} & {
        background: transparent;
        border: none;
        color: ${({theme}) => theme.colors.white};
        &:focus, &:visited, &:link{
            outline: none;
        }
    }
    ${({customArrow}) => `
        
        ${customArrow && `
            width: calc(100% + 20px);
        `}
    `}
`