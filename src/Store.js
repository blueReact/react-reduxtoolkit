import { createSlice, configureStore } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: { username: "Priya", balance: 25000 },
    reducers: {
        addMoney: (state, action) => {
            state.balance = state.balance + action.payload
        },
        removeMoney: (state, action) => {
            state.balance = state.balance - action.payload
        }
    }
});

export const { addMoney, removeMoney } = userSlice.actions;

const store = configureStore({
    reducer: {
        user: userSlice.reducer
    }
})

export default store;