import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
    value: number,
    isSaveDisabled: boolean,
    isResetDisabled: boolean,
}

const initialState: CounterState = {
    value: 0,
    isSaveDisabled: false,
    isResetDisabled: false,
}

export const counterSlice = createSlice({
    name: 'recipe',
    initialState,
    reducers: {
        saveRecipes: (state, action: PayloadAction<boolean>) => {
            state.isSaveDisabled = action.payload
        },
        resetRecipes: (state, action: PayloadAction<boolean>) => {
            state.isResetDisabled = action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { saveRecipes, resetRecipes } = counterSlice.actions

export default counterSlice.reducer
