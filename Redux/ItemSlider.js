import { createSlice } from "@reduxjs/toolkit";
export const item=createSlice({
    name:'item',
    initialState:[],
    reducers:{
        addItem:(state,action)=>{
            const newItem={
                key:Math.random(),
                img:action.payload.newImage,
                keyWord:action.payload.newKeyWord
            }
            state.push(newItem);
        },
        deleteItem:(state,action)=>{
            return state.filter((item)=>item.key!==action.payload.key)
        }
    }
})
export const {addItem,deleteItem}=item.actions;
export default item.reducer;