import { configureStore } from '@reduxjs/toolkit';
import equipmentCategoryFilterReducer from "../store/equipmentcategoryfilter/equipmentcategoryfilterSlice";
export default configureStore({
    reducer: {
        equipmentCategoryFilter: equipmentCategoryFilterReducer
    },
})