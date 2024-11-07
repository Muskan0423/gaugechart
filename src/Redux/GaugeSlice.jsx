import { createSlice } from "@reduxjs/toolkit";

const gaugeslice=createSlice({
    name:'gauge',
    initialState:{
        value:50
    },
    reducers:{
        setGaugevalue:(state,action)=>{
            state.value=action.payload;
        },
        randomGaugeValue: (state) => {
            state.value = Math.floor(Math.random() * 101);
          }
    }
});

export const{setGaugevalue,randomGaugeValue}=gaugeslice.actions;
export default gaugeslice.reducer