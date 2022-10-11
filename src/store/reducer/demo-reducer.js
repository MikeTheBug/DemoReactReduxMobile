import { createReducer } from "@reduxjs/toolkit"
import { demoAction, demoActionReset } from "../action/demo-action"

const initialState = {
    text: "I did not make an action !"
}

export const demoReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(demoAction, (state, action) => {
            console.log(action.payload)
            state.text = action.payload.text1 + action.payload.text2
        })
        .addCase(demoActionReset, (state, action) => {
            state.text = "I did not make an action !"
        })
})