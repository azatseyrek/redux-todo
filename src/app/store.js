import { configureStore } from "@reduxjs/toolkit";
import todosSlice from "../features/todoSlice"

export default configureStore({
    reducer: {
            todos: todosSlice
    },
});

