import React, {useEffect, useState} from "react";
import Row from "components/atoms/Row/Row";
import OuterContainer from "components/atoms/OuterContainer/OuterContainer";
import Section from "components/elements/Section/Section";
import Column from "components/atoms/Column/Column";
import Heading from "components/elements/Heading/Heading";
import DefaultCategoryImage from "../../../assets/images/default-category-image.png";
import ImageComponent from "components/elements/ImageComponent/ImageComponent";
import getEquipment from "utilities/services/equipment/getEquipment";
import EquipmentTile from "components/molecules/EquipmentTile/EquipmentTile";

import { ImageTilesRow, PanelGrid, EquipmentTileGridTile } from "./EquipmentCategoryPanel.styles";

const EquipmentCategoryPanel = ({name, link, categoryImage}) => {
    const [equipmentTiles, setEquipmentTiles] = useState(null)

    useEffect(() => {
        const equipmentTiles = getEquipment();
        setEquipmentTiles(equipmentTiles);
    }, []);

    let imageSrc = (categoryImage ? categoryImage : DefaultCategoryImage);
    return (
        <Section>
            <OuterContainer>
                <Row justify="space-between" align="align-center">
                    <Column>
                        <Heading text={name} size={2} uppercase/>
                    </Column>
                    <Column>
                        View All
                    </Column>
                </Row>
                <ImageTilesRow>
                    <Column w="100%" mw="40%" lw="30%">
                        <ImageComponent src={imageSrc} alt={name}/>
                    </Column>
                    <Column w="100%" mw="60%" lw="70%">
                        {
                            equipmentTiles && (
                                <PanelGrid>
                                    {
    
                                    equipmentTiles.map(equipment => (
                                        <EquipmentTileGridTile 
                                            key={equipment.id}
                                            mw="33.3333%"
                                            >
                                            <EquipmentTile 
                                                data={equipment}
                                            />
                                        </EquipmentTileGridTile>
                                    ))
                                    }
                                </PanelGrid>
                            )
                        }
                    </Column>
                </ImageTilesRow>
            </OuterContainer>
        </Section>
    )
};

export default EquipmentCategoryPanel;