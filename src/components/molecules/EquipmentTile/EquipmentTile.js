import React from "react";
import ImageComponent from "components/elements/ImageComponent/ImageComponent";
import Heading from "components/elements/Heading/Heading";
import { StyledEquipmentTile, EquipmentImage } from "./EquipmentTile.styles";
import Paragraph from "components/elements/Paragraph/Paragraph";

const EquipmentTile = (props) => {

    return (
        <StyledEquipmentTile>
            <EquipmentImage src={props.data.image} alt={props.data.title}/>
            <Heading size={3} text={props.data.title}/>
            <Paragraph>{props.data.description}</Paragraph>
            <Paragraph>{props.data.price}</Paragraph>
        </StyledEquipmentTile>
    )

};

export default EquipmentTile;