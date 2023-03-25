import { createSlice} from "@reduxjs/toolkit";

const filterSlice = createSlice({
    name: '@@filter',
    initialState: 'All',
    reducers: {
        toggleFilter: (state, action) => {
            return state = action.payload
        }
    }
});


export const {toggleFilter} = filterSlice.actions;
export const filterReducer = filterSlice.reducer; 

export const selectActiveFilter = state => state.filter;