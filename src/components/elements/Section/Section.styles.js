import styled from "styled-components/macro";
import { MediaQueries } from "utilities/styles/Breakpoints";

export const StyledSection = styled.section`
    position: relative;
    padding: 1.5rem 0;
    ${MediaQueries.large}{
        padding: 3rem 0;
    }
    background-color: ${props => props.bgColor ? props.bgColor : props.theme.colors.white };

`