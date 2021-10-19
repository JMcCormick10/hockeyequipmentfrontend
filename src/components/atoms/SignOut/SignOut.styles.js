import styled from "styled-components/macro";
import { Link } from "react-router-dom";
import Header from "components/organisms/Header/Header/Header";

export const StyledLink = styled(Link)`
    text-decoration: none;
    ${Header} & {
        color: ${props => props.theme.colors.white};
        padding-left: 10px;
        vertical-align: top;
    }
`;