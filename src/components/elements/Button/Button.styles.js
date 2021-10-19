import styled from "styled-components/macro";
import { Link } from "react-router-dom";
import Banner from "components/organisms/Banner/Banner";

//ToDo - Clean this up a bit so styles don't have to be duplicated.

export const StyledButton = styled.button`
    ${({theme, blue}) => `
        display: inline-block;
        outline: none;
        padding: 15px 25px;
        background-color: ${theme.colors.black};
        font-weight: bold;
        border: none;
        font-size: 18px;
        color: ${theme.colors.white};
        font-family: ${theme.fonts.heading};
        text-transform: uppercase;
        transition: ${theme.transitions.default};
        cursor: pointer;
        text-decoration: none;
        &:hover{
            background-color: ${theme.colors.blue};   
        }
        ${blue && `
            background-color: ${theme.colors.blue};
            &:hover{
                background-color: ${theme.colors.black};
            }
        `}
        
    `};     
    ${Banner} & {
        margin-top: 5px;
    }
`;

export const StyledLink = styled(Link)`
    ${({theme, blue}) => `
        display: inline-block;
        outline: none;
        padding: 15px 25px;
        background-color: ${theme.colors.black};
        font-weight: bold;
        border: none;
        font-size: 18px;
        color: ${theme.colors.white};
        font-family: ${theme.fonts.heading};
        text-transform: uppercase;
        transition: ${theme.transitions.default};
        cursor: pointer;
        text-decoration: none;
        &:hover{
            background-color: ${theme.colors.blue};   
        }
        ${blue && `
            background-color: ${theme.colors.blue};
            &:hover{
                background-color: ${theme.colors.black};
            }
        `}
    `};  
    ${Banner} & {
        margin-top: 5px;
    } 
`