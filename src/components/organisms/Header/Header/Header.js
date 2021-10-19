import React from "react";
import { StyledHeader } from "./Header.styles";
import Row from "components/atoms/Row/Row";
import Column from "components/atoms/Column/Column";
import Logo from "components/atoms/Logo/Logo";
import Avatar from "components/atoms/Avatar/Avatar/Avatar";
import OuterContainer from "components/atoms/OuterContainer/OuterContainer";
import SignOut from "components/atoms/SignOut/SignOut";

const Header = () => (
    <StyledHeader>
        <OuterContainer>
            <Row justify="space-between">
                <Column w="25%">
                    <Logo/>
                </Column>
                <Column w="auto">
                    <Avatar/>
                    <SignOut/>
                </Column>
            </Row>
        </OuterContainer>
    </StyledHeader>
);

export default Header;