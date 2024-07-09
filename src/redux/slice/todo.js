import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: 'todo',
    initialState: { list: [] },
    reducers: {
        addTodo(state, action) {
            const newToDo={
                id:Date.now(),
                text:action.payload,
                isComplete:false
            }
            state.list.push(newToDo);
        },
        removeTodo(state, action) {
            state.list = state.list.filter(todo => todo.id !== action.payload);
        },
        updateStatus(state, action) {
            console.log("hello");
            // const updatedAt = (new Date().toLocaleString())
            // state.list = state.list.map(todo => todo.id === action.payload.id ? { ...todo, isDone: true, updatedAt } : todo)
             state.list=state.list.map(item=>item.id==action.payload?{...item,isComplete:true}:item);
            //  console.log(state.list);
        }
    }
})

const { actions, reducer } = todoSlice

export const { addTodo, removeTodo, updateStatus } = actions

export default reducer