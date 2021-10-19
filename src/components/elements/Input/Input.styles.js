import styled from "styled-components/macro";
import QuickSearch from "components/molecules/QuickSearch/QuickSearch";
import { FONT_SIZES, LINE_HEIGHTS } from "utilities/constants/Constants";
import { MediaQueries } from "utilities/styles/Breakpoints";
export const StyledInput = styled.input `
    padding: 5px 25px;
    outline: none;
    width: 100%;
    font-size: ${FONT_SIZES.inputs};
    line-height: ${LINE_HEIGHTS.inputs};

    ${QuickSearch} & {
        padding-left: 5px;
        background: transparent;
        border: none;
        color: ${({theme}) => theme.colors.white};
        border-bottom: 1px solid ${({theme}) => theme.colors.white};
        &::placeholder{
            opacity: 1;
            color: ${({theme}) => theme.colors.white};
        }
        ${MediaQueries.small}{
            padding-left: 35px;
        }
    }

`;