import { createSlice,nanoid } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name:"todo",
    initialState:[{id:1,text:"SP"}],
    reducers:{
        addtodo:(state,action)=>{
           state.push({id:nanoid(), text:action.payload})
        },

        removetodo:(state,action)=>{
          return state.filter((todo)=>todo.id !== action.payload)
        }
    }
})

console.log(todoSlice,"slice");
export const {addtodo,removetodo} = todoSlice.actions;
export default todoSlice.reducer;