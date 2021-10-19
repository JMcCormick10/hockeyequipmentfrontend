import styled from "styled-components/macro";
import { MediaQueries } from "utilities/styles/Breakpoints";

export const StyledRow = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    margin-right: -15px;
    margin-left: -15px;
    ${props => props.column  && `
        flex-direction: column;
    `}
    ${({justify}) =>
         justify && `justify-content: ${justify}; ` 
    }
    ${({align}) =>
         align && `align-items: ${align}; ` 
    }
    
    ${MediaQueries.small}{
        ${({sJustify}) =>
         sJustify && `justify-content: ${sJustify}; ` 
        }
        ${({sAlign}) =>
            sAlign && `align-items: ${sAlign}; ` 
        }
    }

    ${MediaQueries.medium}{
        ${({mJustify}) =>
         mJustify && `justify-content: ${mJustify}; ` 
        }
        ${({mAlign}) =>
            mAlign && `align-items: ${mAlign}; ` 
        }
    }

    ${MediaQueries.large}{
        ${({lJustify}) =>
         lJustify && `justify-content: ${lJustify}; ` 
        }
        ${({lAlign}) =>
            lAlign && `align-ites: ${lAlign}; ` 
        }
    }

    ${MediaQueries.xlarge}{
        ${({xlJustify}) =>
         xlJustify && `justify-content: ${xlJustify}; ` 
        }
        ${({xlAlign}) =>
            xlAlign && `align-ites: ${xlAlign}; ` 
        }
    }
`;