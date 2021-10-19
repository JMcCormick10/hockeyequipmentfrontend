import styled from "styled-components/macro";
import Row from "components/atoms/Row/Row";
import Column from "components/atoms/Column/Column";
import { MediaQueries } from "utilities/styles/Breakpoints";

export const ImageTilesRow = styled(Row)`
    margin-top: 20px;
`

export const ImageTileColumn = styled(Column)`
    padding-top: 15px;
    padding-bottom: 15px;
`

export const PanelGrid = styled.div`
    display: grid;
    grid-gap: 15px;
    height: 100%;
    grid-template-columns: repeat(1, 1fr);

    ${MediaQueries.small}{
        grid-template-columns: repeat(2, 1fr);
    }

    ${MediaQueries.large}{
        grid-template-columns: repeat(3, 1fr);

    }
`;

export const EquipmentTileGridTile = styled.div`

`