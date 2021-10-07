import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import CountryList from '../../components/CountryList/CountryList';
import { flightList } from '../../store/action/FlightAction';
import  heroImg  from './../../assets/img/hero.jpg';
import CityFlightList from './../../components/CityFlightList/CityFlightList';
import './HomePage.scss';

export default function HomePage() {
    const countryFlights = useSelector(state => state.flightReducer.countryFlights)
    const cityToFlights = useSelector(state => state.flightReducer.cityToFlights)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(flightList({}))
    }, [dispatch])

    return (
        <div className="container">
            <img className="hero-image" src={heroImg} alt={heroImg}/>
            <h2 className="text-center">Choose your destination</h2>
            {countryFlights ?
                <div>
                    <CountryList  countryFlights={countryFlights} />
                </div>
                : null}

            <CityFlightList cities={cityToFlights}/>
        </div>
    )
}
