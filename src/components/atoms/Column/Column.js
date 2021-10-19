import React from "react";
import { StyledColumn } from "./Column.styles";

const Column = ({className, grow, sgrow, mgrow, lgrow, xlgrow, w,  sw, mw, lw, xlw, children}) => (
    <StyledColumn
    className={className}
    grow={grow}
    sgrow={sgrow}
    mgrow={mgrow}
    lgrow={lgrow}
    xlgrow={xlgrow}
    w={w}
    sw={sw}
    mw={mw}
    lw={lw}
    xlw={xlw}
    >
        {children}
    </StyledColumn>
)

export default Column;