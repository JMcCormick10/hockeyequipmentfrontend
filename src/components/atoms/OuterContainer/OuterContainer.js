import React from "react";

import { StyledOuterContainer } from "./OuterContainer.styles";

const OuterContainer = ({children, className}) => (
    <StyledOuterContainer className={className}>{children}</StyledOuterContainer>
)

export default OuterContainer;