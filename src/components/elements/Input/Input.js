import React from "react";

import { StyledInput } from "./Input.styles";
const Input = ({className, value, changed, clicked, placeholder}) => (
    <StyledInput 
        className={className} 
        value={value} 
        onChange={changed} 
        onClick={clicked}
        placeholder={placeholder}
    />
);

export default Input;