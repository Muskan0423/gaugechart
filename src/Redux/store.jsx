import { configureStore } from '@reduxjs/toolkit';
import gaugeReducer from './GaugeSlice'


const store=  configureStore({
    reducer:{
       gauge: gaugeReducer
    }
})


export default store    