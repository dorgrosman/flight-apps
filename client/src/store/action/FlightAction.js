import axios from 'axios'
export const SET_FLIGHT_LIST = 'SET_FLIGHT_LIST'
export const SET_LOCATION_LIST = 'SET_LOCATION_LIST'
export const SET_UPDATE_DATA = 'SET_UPDATE_DATA'

export const flightList = () => {
    return async (dispatch) => {
        const res = await axios.get("http://localhost:8000/api/countriesToFlight")
        const data = res.data;
        dispatch({ type: SET_FLIGHT_LIST, payload: data })
    }
}
export const availableFlight = (countryName) => {
    return async (dispatch) => {
        const res = await axios.get(`http://localhost:8000/api/availableFlightByCountry/${countryName}`)
        const data = res.data;
        dispatch({ type: SET_LOCATION_LIST, payload: data })
    }
}
export const selectedFlight = (flightId) => {
    return async (dispatch) => {
        const res = await axios.post(`http://localhost:8000/api/toggleSelectedFlight/${flightId}`)
        const updateData = res.data
        dispatch({ type: SET_UPDATE_DATA, payload: updateData })
    }
}

