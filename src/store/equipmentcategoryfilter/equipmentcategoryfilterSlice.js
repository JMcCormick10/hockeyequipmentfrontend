import { createSlice } from "@reduxjs/toolkit";
import { PRICE_DROPDOWN_OPTIONS } from "utilities/constants/Constants";

export const equipmentCategoryFilterSlice = createSlice({
    name: 'equipmentCategoryFilterSlice',
    initialState: {
        filters: {
            keyword: "",
            equipmentType: "",
            price: PRICE_DROPDOWN_OPTIONS[0].id,
        }
    },
    reducers: {
        updateFilters: (state, action) => {
            state.filters = action.payload;
        }
    }
})

export const { updateFilters } = equipmentCategoryFilterSlice.actions;

export default equipmentCategoryFilterSlice.reducer;