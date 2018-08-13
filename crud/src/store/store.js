import {createStore, combineReducers} from "redux";

import contact from "./reducers/contact.js"

const RootReducer = combineReducers({
	contact : contact	
})

const store = () => {
	return createStore(RootReducer);
}

export default store;