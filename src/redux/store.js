import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import users from './reducers/users'

const middlewares = compose(applyMiddleware(thunk, logger)) // tanggalin logger sa prod

const reducers = combineReducers({
	users, //users: users
})

export default createStore(reducers, middlewares)
