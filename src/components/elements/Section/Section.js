import React from "react";
import { StyledSection } from "./Section.styles"
const Section = ({className, bgColor, children}) => <StyledSection className={className} bgColor={bgColor}>{children}</StyledSection>;

export default Section;