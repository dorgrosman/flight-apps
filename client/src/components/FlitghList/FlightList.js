import React, { useState } from 'react'
import ContactPreview from '../CityFlightPreview/FlightPreview'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { useSelector } from 'react-redux';
import LoadingBox from './../LoadingBox/LoadingBox';
import './ContactsList.scss'

export default function FlightList(props) {
    const flights = props.flights
    return (
        <div>
            
            {flights ? (
                <ul className="contacts-list ">
                    {flights.filter(flights => {
                    }).map(flights =>
                        <li key={flights.id.value}><ContactPreview key={flights.id.value} flights={flights} /> </li>
                    )}
                </ul>
            ) : <LoadingBox />}
        </div>
    )
}
