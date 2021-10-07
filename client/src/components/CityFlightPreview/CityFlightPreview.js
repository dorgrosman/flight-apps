import React, { useState, useEffect } from 'react'
import Moment from "react-moment";
import { useDispatch } from 'react-redux';
import { selectedFlight } from '../../store/action/FlightAction';
import Alert from '@mui/material/Alert';
import fraImg from './../../assets/img/Franca_flag.png'
import isrImg from './../../assets/img/Israel_Flag.png'
import engImg from './../../assets/img/United_Kingdom_Flag_of_the.png'
import './CityFlightPreview.scss'


export default function CityFlightPreview(props) {
    const cityDetails = props.cityDetails
    const [isSelected, setIsSelected] = useState(false)
    const [isShow, setIsShow] = useState(false)
    const dispatch = useDispatch();
    let countryFlag = null;
    if (cityDetails.country === 'france') {
        countryFlag = fraImg
    } else if (cityDetails.country === 'england') {
        countryFlag = engImg
    } else if (cityDetails.country === 'israel') {
        countryFlag = isrImg
    }
    
    useEffect(() => {
        if(cityDetails.isSelected === true){
            setIsSelected(true)
        }
    },[cityDetails])

    const isSelectedHandel = (event) => {
        event.preventDefault()
        dispatch(selectedFlight(cityDetails.id))
        setIsSelected(!isSelected)
        setIsShow(true)
        setTimeout(() => {
            setIsShow(false)
        }, 2500);
    }

    return (
        <div id="details">
            {isShow ?
                <div className="container"> <Alert severity="success">The flight to {cityDetails.destination} has been {isSelected ? 'Selected' : 'Unelected'}!</Alert>
                </div>
                : null}
            <div className="card-container flex container space-around align-center">
                <div>
                    <p className="">ID: {cityDetails.id} </p>
                </div>
                <div className="flex column">
                    <p className="destination">{cityDetails.destination} </p>
                </div>
                <div className="dates flex space-between align-center">
                    <div>
                        <p className=""><i className="fas fa-plane-departure"></i> <Moment format=" HH:mm | YYYY/MM/DD ">{cityDetails.departure}</Moment> &nbsp;</p>
                    </div>
                    <div>
                        <p className=""><i className="fas fa-plane-arrival"></i><Moment format=" HH:mm | YYYY/MM/DD ">{cityDetails.arrive_at}</Moment></p>
                    </div>
                </div>
                <div>
                    <p className="">{cityDetails.price} $</p>
                </div>

                <div>
                    <img src={countryFlag} alt={cityDetails.country} />
                </div>
                <div>
                    <a className="star" onClick={(event) => isSelectedHandel(event)} href="details"><i className={`${cityDetails.isSelected ? 'fas fa-star' : 'far fa-star'}`}></i></a>
                </div>
            </div>

        </div >

    )
}