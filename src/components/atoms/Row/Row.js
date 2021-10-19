import React from "react";
import { StyledRow } from "./Rows.styles"

const Row = ({className, children, column, justify, sJustify, mJustify, lJustify, xlJustify, align, sAlign, mAlign, lAlign, xlAlign }) => (
    <StyledRow 
        className={className}
        column={column}
        justify={justify} 
        sJustify={sJustify} 
        mJustify={mJustify} 
        lJustify={lJustify} 
        xlJustify={xlJustify}
        align={align}
        sAlign={sAlign}
        mAlign={mAlign}
        lAlign={lAlign}
        xlAlign={xlAlign}
    >
        {children}
    </StyledRow>
)

export default Row;