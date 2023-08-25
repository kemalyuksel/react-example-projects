import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TurkeyMap from 'turkey-map-react';
import apiKey from '../../config.json'; // Default export olarak al
import { Row, Col, Card } from 'react-bootstrap';

const Map = () => {

    const [city, setCity] = useState('');
    const [weather, setWeather] = useState(null);
    const [weekly, setWeekly] = useState(null);

    const fetchCurrentWeather = async () => {

        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey.api_key}`;

        try {
            const response = await axios.get(apiUrl);
            setWeather(response.data);
        } catch (error) {
            console.error('Could not get current weather:', error);
        }
    }

    const fetchWeeklyWeather = async () => {
        const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey.api_key}`;

        try {
            const response = await axios.get(forecastUrl);
            setWeekly(response.data.list);

        } catch (error) {
            console.error('Could not get weekly weather:', error);
        }
    }


    useEffect(() => {
        if (city) {
            fetchCurrentWeather();
            fetchWeeklyWeather();
        }
    }, [city]);


    const handleOnClick = async (name) => {
        setCity(name);
    }


    return (
        <div>

            <Row>
                <Col md={1}></Col>

                <Col md={4} className="daily-weather-col" >


                    <h4 style={{ color: "white", justifyContent: "center", display: "flex" }} >Daily Weather</h4>

                    <hr />
                    {weather && (
                        <div className="daily-weather-card" style={{ color: "white", fontWeight: "500", letterSpacing: "2px" }}>
                            <span >
                                {new Date(weather.dt).toLocaleDateString('en-US', {
                                    day: 'numeric',
                                    month: 'long',
                                    hour: 'numeric',
                                    minute: 'numeric'
                                })}
                            </span>
                            <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="Weather Icon" />
                            <h2>{weather.name}, {weather.sys.country}</h2>
                            <p className="mt-3" >Temperature: <span style={{ fontSize: "40px" }} >{(weather.main.temp - 273.15).toFixed(1)}</span> °C</p>
                            <p className="mt-3" >Weather: {weather.weather[0].description}</p>
                            <p className="mt-3" >Wind Speed: {weather.wind.speed} m/s</p>
                        </div>
                    )}
                </Col>

                <Col md={5}>
                    <TurkeyMap
                        hoverable={true}
                        onClick={({ plateNumber, name }) => handleOnClick(name)}
                    />
                </Col>

            </Row>

            <Row>
                <p style={{ justifyContent: "center", display: "flex", fontSize: "20px", backgroundColor: "black", color: "white", padding: "3px" }}>
                    5 Day / 3 Hour Forecast
            </p>
                {weekly && (
                    <>
                        {weekly.map((weather, index) => (
                            <Col md={12}>
                                <div style={{ alignContent: "center" }}>
                                    <Card style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", padding: "5px", margin: "20px", height: "150px", border: "none", color: "white" }}>

                                        <Card.Body className="daily-card" style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", alignContent: "center" }}>

                                            <h2 >
                                                {new Date(weather.dt_txt).toLocaleDateString('en-US', {
                                                    day: 'numeric',
                                                    month: 'long',
                                                    hour: 'numeric',
                                                    minute: 'numeric'
                                                })}
                                            </h2>
                                            <div style={{ alignContent: "center", marginLeft: "200px", flex: "1" }}>
                                                <img style={{ marginTop: "-50px" }} src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`} alt="Weather Icon" />
                                            </div>


                                            <div style={{ alignContent: "center", marginLeft: "250px" }}>
                                                <span><h3>{(weather.main.temp_min - 273.15).toFixed(1)}°C</h3></span>
                                                <span><h5>Low</h5></span>
                                            </div>

                                            <div style={{ alignContent: "center", marginLeft: "250px" }}>
                                                <span><h3> {(weather.main.temp_max - 273.15).toFixed(1)}°C</h3></span>
                                                <span><h5>High</h5></span>
                                            </div>

                                            <div style={{ alignContent: "center", marginLeft: "250px" }}>
                                                <span><h3>{weather.wind.speed} m/s</h3></span>
                                                <span><h5>Wind</h5></span>
                                            </div>

                                        </Card.Body>
                                    </Card>
                                </div>
                            </Col>
                        ))}
                    </>
                )}
            </Row>

        </div>
    );
};

export default Map;