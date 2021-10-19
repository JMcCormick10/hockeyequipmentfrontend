import React from "react";
import { useHistory } from "react-router";
import { StyledQuickSearch } from "./QuickSearch.styles";
import Row from "components/atoms/Row/Row";
import Column from "components/atoms/Column/Column";
import Button from "components/elements/Button/Button";
import useScreenSize from "hooks/useScreenSize";
import Input from "components/elements/Input/Input";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import getEquipmentCategories from "utilities/services/equipment/getEquipmentCategories";
import { PRICE_DROPDOWN_OPTIONS } from "utilities/constants/Constants";
import Select from "components/elements/Select/Select";
import _ from "lodash";
import { useSelector, useDispatch } from "react-redux";
import { updateFilters } from "store/equipmentcategoryfilter/equipmentcategoryfilterSlice";

const QuickSearch = (props) => {
    const screenSize = useScreenSize();
    const displayAdditionalColumns = screenSize !== 'mobile' && screenSize !== 'small';
    const displaySearchButton = screenSize !== 'mobile';
    const equipmentCats = getEquipmentCategories();
    let history = useHistory();

    const filters = useSelector((state) => state.equipmentCategoryFilter.filters);
    console.log('the filters are');
    console.log(filters);
    const dispatch = useDispatch();

    const handleQuickSearchSubmit = (event) => {
        event.preventDefault();
        history.push('/search-results');
    }
    
    return (
        <StyledQuickSearch onSubmit={handleQuickSearchSubmit}>
            <Row justify="space-between" align="flex-end">
                <Column grow lw="50%">
                    <FontAwesomeIcon className="search-icon" icon={faSearch} />
                    <Input 
                        placeholder="Search By Keyword..." 
                        value={filters.keyword} 
                        changed={(e) => dispatch(updateFilters({...filters, keyword: e.target.value}))}/>
                </Column>
                {
                    displayAdditionalColumns && (
                        <>
                            <Column grow>
                                <Select 
                                    options={equipmentCats} 
                                    value={filters.equipmentType} 
                                    changed={(e) => dispatch(updateFilters({...filters, equipmentType: e.target.value}))}
                                    customArrow/>
                            </Column>
                            <Column grow>
                                <Select 
                                    options={PRICE_DROPDOWN_OPTIONS} 
                                    value={filters.price} 
                                    changed={(e) => dispatch(updateFilters({...filters, price: e.target.value}))}
                                    customArrow/>
                            </Column>
                        </>
                    )
                }
                {
                    displaySearchButton && (
                        <Column w="auto">
                            <Button blue text="Search"/>
                        </Column>
                    )
                }
            </Row>
        </StyledQuickSearch>
    );
}

export default QuickSearch;