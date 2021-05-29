import {applyMiddleware, combineReducers, createStore} from "redux";
import {imagesReducer} from "./images-reducer";
import thunkMiddleware from 'redux-thunk'


const rootReducer = combineReducers({
    data: imagesReducer
})


export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

export type AppRootStateType = ReturnType<typeof rootReducer>