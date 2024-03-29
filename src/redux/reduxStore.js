import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sitebarReducer from "./sitebarReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";
import thunk from "redux-thunk";  // Импортируем 'redux-thunk'
import { reducer as formReducer } from 'redux-form';
import appReducer from "./appReducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sitebar: sitebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

window.__store__ = store;

export default store;