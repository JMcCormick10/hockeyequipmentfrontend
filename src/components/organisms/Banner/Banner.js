import React from "react";
import { StyledBanner } from "./Banner.styles";
import Row from "components/atoms/Row/Row";
import Heading from "components/elements/Heading/Heading";
import Column from "components/atoms/Column/Column";
import OuterContainer from "components/atoms/OuterContainer/OuterContainer";
import Paragraph from "components/elements/Paragraph/Paragraph";
import { BannerImage, BackgroundBannerText } from "./Banner.styles";
import BannerImageSrc from "assets/images/sedin.png";
import Button from "components/elements/Button/Button";
const Banner = ({className, bgColor}) => {
    return (
        <StyledBanner className={className} bgColor={bgColor}>
            <OuterContainer>
                <Row justify="space-between">
                    <Column mw="500px" w="100%">
                        <Heading size={1} text="Shop for Hockey Gear"/>
                        <Paragraph>Hockey can be expensive, and the equipment is no different. We provide the best place to buy and sell used hockey equipment, so everyone has a chance to enjoy the game. </Paragraph>
                        <Button text="Browse Categories"/>
                    </Column>
                </Row>
            </OuterContainer>
            <BannerImage src={BannerImageSrc} alt="sedin"/>
            <BackgroundBannerText>
                Hockey <br/> 
                Swap
            </BackgroundBannerText>
        </StyledBanner>
    )
}

export default Banner;