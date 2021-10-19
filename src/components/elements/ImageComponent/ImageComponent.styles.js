import styled from "styled-components/macro";
import EquipmentCategoryPanel from "components/organisms/EquipmentCategoryPanel/EquipmentCategoryPanel";

export const StyledImageComponent = styled.img`
    max-width: 100%;

    ${EquipmentCategoryPanel} & {
        object-fit: cover;
        width: 100%;
        height: 100%;
    }
`