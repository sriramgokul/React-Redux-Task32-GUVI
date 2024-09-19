import { createSlice } from "@reduxjs/toolkit";


const phoneReducer = createSlice({
    name: "mobileDetails",
    initialState : {
        quantites : {},
    },
    reducers : {
        countIncrease(state,action){
            state.quantites = action.payload
        },
        countDecrease(state,action){
            state.quantites = action.payload
        }
    }
},
)

export const {countIncrease,countDecrease} = phoneReducer.actions;
export default phoneReducer.reducer;
