import React from "react";
import { StyledImageComponent } from "./ImageComponent.styles";

const ImageComponent = ({src, alt, className}) => ( 
    <StyledImageComponent src={src} className={className} alt={alt} />
)

export default ImageComponent;