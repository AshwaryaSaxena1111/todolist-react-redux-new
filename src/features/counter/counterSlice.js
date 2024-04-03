import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todod: [],
}

// export const counterSlice = createSlice({
//     name: 'counter',
//     initialState,
//     reducers: {
//         addToDo: (state) => {
//             state.value += 1
//         },
//         editToDo: (state) => {
//             state.value -= 1
//         },
//         deleteToDo: (state, action) => {
//             state.value += action.payload
//         },
//     },
// })

// export const { increment, decrement, incrementByAmount } = counterSlice.actions
// export default counterSlice.reducer

const todoSlice = createSlice({
    name:'todos',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.todos.push(action.payload);
        },
        removeTodo: (state, action) => {
           state.todos = state.filter(todo => todo.id !== action.payload.id);
        },
        toggleTodo: (state, action) => {
            state.todos = state.todos.map(todo =>
                todo.id === action.payload ? {...todo, completed: !todo.completed} : todo
                )
        },
    },
});

export const {addTodo , removeTodo, toggleTodo} = todoSlice.actions;
export default todoSlice.reducer;