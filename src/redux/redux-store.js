import {applyMiddleware, createStore} from "redux";
import {combineReducers} from "redux/es/redux";
import profilePageReducer from "./profilePageReducer";
import dialogPageReducer from "./dialogPageReducer";
import navReducer from "./navReducer";
import friendsReducer from "./friendsReducer";
import usersReducer from "./usersReducer";
import loginReducer from "./loginReducer";
import thunk from "redux-thunk";

let reducers = combineReducers({
    profilePage: profilePageReducer,
    dialogPage: dialogPageReducer,
    nav: navReducer,
    friends: friendsReducer,
    users: usersReducer,
    login: loginReducer,
});

let store = createStore(reducers,applyMiddleware(thunk));

export  default store;