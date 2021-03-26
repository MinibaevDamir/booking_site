import {combineReducers, createStore} from "redux";
import hotelReducer from "./hotel-reducer";
import headerReducer from "./header-reducer";
import offersReducer from "./offers-reducer";


let reducers = combineReducers(
    {
        userDataPage: headerReducer,
        hotelsPage: hotelReducer,
        offersPage: offersReducer
    }
)

const store = createStore(reducers);

window.store = store;

export default store;