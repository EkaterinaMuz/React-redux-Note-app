import { createSlice, nanoid } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: '@@todos',
    initialState: [],
    reducers: {
        addTodo: {
            reducer: (state, action) => {
                state.unshift(action.payload)
            },
            prepare: (title) => ({
                payload: {
                    title,
                    completed: {
                        checked: false,
                    },
                    id: nanoid(),
                    editable: false,
                    date: new Date(Date.now()).toDateString()
                }

            })
        },
        removeTodo: (state, action) => {
            return state.filter(todo => todo.id !== action.payload)
        },

        toggleTodo: (state, action) => {
            const checkedTodo = state.find(todo => todo.id === action.payload);
            checkedTodo.completed.checked = !checkedTodo.completed.checked
        },

        editTodoStart: (state, action) => {
            const editedTodo = state.find((todo) => todo.id === action.payload);
            editedTodo.editable = true
        },
        editCancel: (state, action) => {
            const editedTodo = state.find((todo) => todo.id === action.payload);
            editedTodo.editable = false
        },

        updateTodo: (state, { payload }) => {
            const editedTodo = state.find((todo) => todo.id === payload.id);
            editedTodo.title = payload.editedTitle;
            editedTodo.editable = false;
        }
    }
});


export const { addTodo, removeTodo, toggleTodo, editTodoStart, editCancel, updateTodo } = todoSlice.actions;
export const todoReducer = todoSlice.reducer;

export const selectTodoValue = state => state.todo.title;
export const selectEditable = state => state.todo.editable;
export const selectTodoItems = state => state.todo;

export const selectFilteredTodo = (state, filter = 'All') => {
    switch (filter) {
        case 'All':
            return state.todo

        case 'Active':
            return state.todo.filter(todo => !todo.completed.checked)

        case 'Done':
            return state.todo.filter(todo => todo.completed.checked)

        default:
            return state.todo
    }
};

export const activeTodoLength = state => state.todo.filter(todo => !todo.completed.checked).length;
export const doneTodoLength = state => state.todo.filter(todo => todo.completed.checked).length;

