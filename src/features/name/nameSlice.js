import {createSlice} from '@reduxjs/toolkit';

export const nameSlice = createSlice({
    name: 'name',
    initialState : {
        name: 'Global Demo'
    }
});

export const selectName = (state) => state.name.name;
export default nameSlice.reducer;