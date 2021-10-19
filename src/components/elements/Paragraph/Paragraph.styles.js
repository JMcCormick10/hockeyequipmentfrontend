import styled from 'styled-components/macro';
import { FONT_SIZES, LINE_HEIGHTS } from 'utilities/constants/Constants';
export const StyledParagraph = styled.p`
    font-family: ${props => props.theme.fonts.body};
    font-size: ${FONT_SIZES.paragraph};
    line-height: ${LINE_HEIGHTS.paragraph};
`