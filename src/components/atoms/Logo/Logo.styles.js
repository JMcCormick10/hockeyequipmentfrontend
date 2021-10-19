import styled from "styled-components/macro";
import Heading from "components/elements/Heading/Heading";
import Header from "../../organisms/Header/Header/Header";

export const StyledHeading = styled(Heading)`
    font-size: 22px;
    line-height: 26px;

    ${Header} & {
        color: ${props => props.theme.colors.white};
    }
`
