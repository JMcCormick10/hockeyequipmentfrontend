import React from "react";
import { StyledSelect, StyledSelectContainer } from "./Select.styles";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

const Select = ({options, changed, customArrow,  arrowColor, value}) => (
    <StyledSelectContainer customArrow arrowColor={arrowColor}>
        {customArrow && <FontAwesomeIcon icon={faCaretDown}/>}
        <StyledSelect value={value} onChange={changed} customArrow>
            {
                options.map((option, index) => (
                    <option 
                        key={index}
                        value={option.id}
                        
                        >
                        {option.text}
                    </option>
                ))
            }
        </StyledSelect>
    </StyledSelectContainer>
)   

export default Select;