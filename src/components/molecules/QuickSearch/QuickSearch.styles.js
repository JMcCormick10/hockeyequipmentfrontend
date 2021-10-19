import styled from "styled-components/macro";
import Home from "containers/Home/Home";
import { MediaQueries } from "utilities/styles/Breakpoints";

export const StyledQuickSearch = styled.form`
    background: ${({theme}) => theme.colors.black};
    padding: 30px;
    ${Home} & {
        margin-top: -60px;        
    }

    .search-icon{
        color: ${({theme}) => theme.colors.yellow};
        position: absolute;
        bottom: 10px;
        right: 15px;
        ${MediaQueries.small}{
            right: unset; 
            left: 15px;
        }
    }
`