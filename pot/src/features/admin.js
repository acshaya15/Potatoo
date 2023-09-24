import {createSlice} from '@reduxjs/toolkit';

export const adminSlice = createSlice({
    name : 'admin',     
    initialState : { value : {email: 'Nandhini'}},
    reducers : {
        login: (state, action) => {
            state.value = action.payload
        },
        logout: (state) => {
            state.value = " ";
        }
    }
});

export const {login, logout} = adminSlice.actions;
export default adminSlice.reducer;