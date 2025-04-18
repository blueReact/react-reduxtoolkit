# react-reduxtoolkit
Redux Toolkit Basic Example
This project demonstrates a basic setup of Redux Toolkit with React.

# Files Overview
# 📄 components/UserInfo.jsx
Uses useSelector to read the user state.

Uses useDispatch to dispatch actions.

Displays username and balance.

Has two buttons:

Add 500 → calls dispatch(addMoney(500))

Remove 500 → calls dispatch(removeMoney(500))

# 📄 App.jsx
Renders the <UserInfo /> component inside a div.

Simple application root component.

# 📄 Store.js
userSlice is created using createSlice:

initialState: { username: "Priya", balance: 25000 }

addMoney reducer: Increases balance.

removeMoney reducer: Decreases balance.

Exports the addMoney and removeMoney actions.

Exports the store using configureStore.

# 📄 index.jsx
Wraps the whole application inside <Provider store={store}> so Redux is available everywhere.

Renders the <App /> inside StrictMode.

# How It Works:
App loads the UserInfo component.

UserInfo reads the user data using useSelector.

UserInfo dispatches addMoney or removeMoney actions when buttons are clicked.

The userSlice updates the Redux state automatically.

React re-renders the UI when the Redux store changes.

# ✅ Tech Used
React

Redux Toolkit

React Redux
