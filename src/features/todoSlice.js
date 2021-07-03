import { createSlice } from "@reduxjs/toolkit";
import Task from '../components/Task';

const task = [Task(1,'ToDo11',false),Task(2,'ToDo2',false),Task(3,'ToDo3',true)];


export const todoSlice = createSlice({
    name: 'todo',
    initialState: task,
    reducers: {
        addTodo: (state, action) => {
            const newTodo = Task(Date.now(),action.payload,false);
            state.push(newTodo);
        },
        completedTask: (state, action) => {
            const index = state.findIndex((item) => item.id === action.payload.id);
            state[index].isDone = !action.payload.isDone;
        },
        filterIsDone: (state) => {
            state = state.filter(item => item.isDone === true);
        }
    }
})

export const {addTodo, completedTask, filterIsDone} = todoSlice.actions;
export default todoSlice.reducer;