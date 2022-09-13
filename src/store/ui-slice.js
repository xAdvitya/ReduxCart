import {createSlice} from '@reduxjs/toolkit'

const uiSlice=createSlice({
    name:'ui',
    initialState:{cardVisible:false},
    reducers:{
        toggle(state){
            state.cardVisible = !state.cardVisible
        }
    }
});

export const uiActions = uiSlice.actions
export default uiSlice.reducer