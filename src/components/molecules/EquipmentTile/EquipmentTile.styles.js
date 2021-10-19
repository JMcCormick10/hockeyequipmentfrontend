import styled from "styled-components/macro";
import ImageComponent from "components/elements/ImageComponent/ImageComponent";

export const StyledEquipmentTile = styled.div`
    padding: 10px;
    box-shadow: 0px 4px 34px rgba(0, 0, 0, 0.07);
    background: ${({theme}) => theme.colors.white};
    height: 100%;
`

export const EquipmentImage = styled(ImageComponent)`
    width: auto;
    height: 100px;
    object-fit: contain;
    display: block;
    margin: 0 auto;
    margin-bottom: 15px;
    
`