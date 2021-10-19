import styled from "styled-components/macro";
import { MediaQueries } from "utilities/styles/Breakpoints";

export const StyledColumn = styled.div`
    position: relative;
    padding-right: 15px;
    padding-left: 15px;
    ${({grow}) => 
        grow && `flex-grow: 1;`
    };

    ${({w}) => 
        w && `flex: 0 0 ${w}; max-width: ${w};
    `}
    

    ${MediaQueries.small}{
        ${({sgrow}) => 
            sgrow && `'flex-grow: 1;`
        }
        ${({sw}) => 
            sw && `flex: 0 0 ${sw}; max-width: ${sw};`
        }
    }

    ${MediaQueries.medium}{
        ${({mgrow}) => 
            mgrow && `'flex-grow: 1;`
        }
        ${({mw}) => 
            mw && `flex: 0 0 ${mw}; max-width: ${mw};`
        }
    }

    ${MediaQueries.large}{
        ${({lgrow}) => 
            lgrow && `'flex-grow: 1;`
        } 
        ${({lw}) => 
            lw && `flex: 0 0 ${lw}; max-width: ${lw};`
        }
    }
    
    ${MediaQueries.xlarge}{
        ${({xlgrow}) => 
            xlgrow && `'flex-grow: 1;`
        }
        ${({xlw}) => 
            xlw && `flex: 0 0 ${xlw}; max-width: ${xlw};`
        }
    }  
`;