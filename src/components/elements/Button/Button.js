import React from "react";
import { StyledButton, StyledLink } from "./Button.styles";

const Button = ({text, clicked, link, blue}) => {

    return (
        link ? 
            <StyledLink  
                onClick={clicked}
                blue={blue}
                >
                    {text}
            </StyledLink>
        : <StyledButton 
            onClick={clicked}
            blue={blue}
            >
                {text}
            </StyledButton>
    )
}

export default Button;