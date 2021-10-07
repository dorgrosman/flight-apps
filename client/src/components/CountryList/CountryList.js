import React from 'react'
import { useDispatch } from 'react-redux';
import { availableFlight } from '../../store/action/FlightAction';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


import './CountryList.scss'

export default function CountryList(props) {
    const countryName = props.countryFlights
    const [country, setCountry] = React.useState('');
    const dispatch = useDispatch();


    const handleChange = (event) => {
        event.preventDefault();
        dispatch(availableFlight(event.target.value))
    };

    return (
        <div className="container">
            {countryName ? (
                <div>
                    <FormControl fullWidth >
                        <InputLabel id="demo-simple-select-label">Country</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={country}
                            label="Country"
                            onChange={handleChange}
                            
                        >
                            {countryName.map(country =>
                                    <MenuItem key={country} value={country}>{country}</MenuItem>
                            )}
                        </Select>
                    </FormControl>
                </div>
            ) : null}
        </div>
    )
}
