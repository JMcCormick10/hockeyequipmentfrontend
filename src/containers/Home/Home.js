import React from "react";
import Container from "../Container";
import Header from "components/organisms/Header/Header/Header";
import Banner from "components/organisms/Banner/Banner";
import Theme from "utilities/styles/Theme";
import OuterContainer from "components/atoms/OuterContainer/OuterContainer";
import QuickSearch from "components/molecules/QuickSearch/QuickSearch";
import EquipmentCategoryPanel from "components/organisms/EquipmentCategoryPanel/EquipmentCategoryPanel";
const Home = () => {
    return (
        <Container page="Home">
            <Header/>
            <Banner 
                bgColor={Theme.colors.grey}
                />
            <OuterContainer>
                <QuickSearch/>
            </OuterContainer>
            <EquipmentCategoryPanel name="Helmet"/>
            <EquipmentCategoryPanel name="Skates"/>
            <EquipmentCategoryPanel name="Shoulder Pads"/>
        </Container>
    )
}

export default Home;