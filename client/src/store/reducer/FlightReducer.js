
import { SET_FLIGHT_LIST, SET_LOCATION_LIST,SET_UPDATE_DATA } from './../action/FlightAction';

const initialState = {
    countryFlights: [],
    countrySelected: null,
    cityToFlights: []
};

export const FlightReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_FLIGHT_LIST:
            const flightsList = action.payload
            return { ...state, countryFlights: flightsList }
        case SET_LOCATION_LIST:
            const locationFlights = action.payload
            return { ...state, cityToFlights: locationFlights }
        case SET_UPDATE_DATA:
            const updateData = action.payload
            return { ...state, cityToFlights: updateData }
        default:
            return state
    }
}
