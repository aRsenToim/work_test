import { configureStore } from "@reduxjs/toolkit";
import postsSlice from "./slices/postsSlice";


const store = configureStore({
    reducer: {
        postsSlice: postsSlice
    }
})

window.store = store

export default store