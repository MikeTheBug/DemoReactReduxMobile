import { configureStore } from "@reduxjs/toolkit"
import { demoReducer } from "./reducer/demo-reducer"

export const store = configureStore({
    reducer: {
        demo: demoReducer
    },
    devTools: process.env.NODE_ENV !== "production"
})