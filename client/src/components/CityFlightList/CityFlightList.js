import React, { useState} from 'react'
import CityFlightPreview from './../CityFlightPreview/CityFlightPreview';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import './CityFlightList.scss'


export default function CityFlightList(props) {
    const cities = props.cities
    const [flightToShow, setFlightToShow] = useState('all')
    return (
        <div>
            <div className="text-center">
                <FormControl component="fieldset">
                    <RadioGroup row aria-label="gender" name="row-radio-buttons-group">
                        <FormControlLabel value="all" control={<Radio />} labelPlacement="start" onClick={() => setFlightToShow('all')} label="All" />
                        <FormControlLabel value="selected" control={<Radio />} labelPlacement="start" onClick={() => setFlightToShow('selected')} label="Selected" />
                        <FormControlLabel value="unselected" control={<Radio />} labelPlacement="start" onClick={() => setFlightToShow('unselected')} label="Unselected" />
                    </RadioGroup>
                </FormControl>
            </div>
            {cities ?
                <div>
                    <ul className="container flex column align-center">
                        {cities.filter(city => {
                            if (flightToShow === "all") {
                                return city
                            } else if (flightToShow === "selected") {
                                return city.isSelected === true
                            } else if (flightToShow === "unselected") {
                                return city.isSelected === false
                            }
                            
                        }).map(city =>
                            <li className="flight-details" key={city.id}>
                                <CityFlightPreview key={city.id} cityDetails={city} />
                            </li>
                        )}
                    </ul>
                </div>
                : null}

        </div>
    )
}

