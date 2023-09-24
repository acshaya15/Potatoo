import {createSlice} from '@reduxjs/toolkit';

export const adminSlice = createSlice({
    name : 'admin',     
    initialState : [],
    reducers : {
        login: (state, action) => {
            state.value = action.payload
        },
        logout: (state) =>null,
        },
    
});

export const {login, logout } = adminSlice.actions;
export default adminSlice.reducer;