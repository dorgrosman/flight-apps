import { createStore, combineReducers, applyMiddleware } from 'redux'
import  {FlightReducer}  from './reducer/FlightReducer'
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
  flightReducer: FlightReducer
})
const store = createStore(rootReducer, applyMiddleware(thunk))

export default store;