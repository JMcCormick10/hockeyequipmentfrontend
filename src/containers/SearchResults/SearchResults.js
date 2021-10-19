import React from "react";
import Container from "../Container";
import Header from "components/organisms/Header/Header/Header";
import { useSelector, useDispatch } from "react-redux";

const SearchResults = () => {
    const filters = useSelector(state => state.equipmentCategoryFilter.filters);
    return (
        <Container page="Search Results">
            <Header/>
            Search Results Page.
            <div>Keyword: {filters.keyword}</div>
            <div>Equipment Type: {filters.equipmentType}</div>
            <div>Price: {filters.price}</div>
        </Container>
    )
}

export default SearchResults;