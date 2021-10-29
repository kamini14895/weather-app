import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import MET_WEATHER_API from "../met-weather-api";
import LoadingSpinner from "../ui/LoadingSpinner";
import WeatherDetails, { WeatherInfo } from "./WeatherDetails";
import {Row, Col } from 'react-bootstrap';
import Breadcrumb from 'react-bootstrap/Breadcrumb';

const getDayOrdinal = (dayNumber: number) =>
  dayNumber +
  (dayNumber > 0
    ? ["th", "st", "nd", "rd"][
        (dayNumber > 3 && dayNumber < 21) || dayNumber % 10 > 3
          ? 0
          : dayNumber % 10
      ]
    : "");

const LocationDetails: React.FC = () => {
  const [fetching, setFetching] = useState(false);
  const { woeid } = useParams<{ woeid: string }>();
  
  const [weatherDetails, setWeatherDetails] = useState<WeatherInfo[]>([]);
  const [cityName, setCityName] = useState("")
  const validParameter = !!woeid && !isNaN(+woeid);
  const history = useHistory();

  useEffect(() => {
    if (!validParameter) {
        history.replace('/cities')
        return;
    }
      setFetching(true);

      MET_WEATHER_API.get<{
        consolidated_weather: {
          applicable_date: string;
          max_temp: number;
          min_temp: number;
          weather_state_abbr: string;
          weather_state_name :string;
          wind_speed: number;
          humidity: number;
        }[];
        title: string;
      }>(`location/${woeid}`)
        .then((res) => {
          setCityName(res.data.title);
          return res.data.consolidated_weather.splice(0, 5).map((d) => {
            return {
              dayName: new Date(d.applicable_date).toLocaleDateString("en", {
                weekday: "short",
              }),
              dayOrdianl: getDayOrdinal(new Date(d.applicable_date).getDate()),
              maxTemp: Math.round(d.max_temp) + "°",
              minTemp: Math.round(d.min_temp) + "°",
              icon: `https://www.metaweather.com/static/img/weather/${d.weather_state_abbr}.svg`,
              stateName: d.weather_state_name,
              windSpeed: Math.round(d.wind_speed * 1.609344) +'kmph',
              humidity : Math.round(d.humidity) + '%'
            };
          });  
        })
        .then((transformedData) => {
          setWeatherDetails(transformedData);
          setFetching(false);
        }).catch(error => {
            console.log(error)
            setFetching(false)
        })
    
  }, [woeid, validParameter, history]);

  let template = <LoadingSpinner></LoadingSpinner>;

  if (!fetching && weatherDetails.length > 0) {
    template = (
        <>
        <Row>
            <Col className="mb-5">
            <Breadcrumb>
            <Breadcrumb.Item  href="/">
                Cities
            </Breadcrumb.Item>
            <Breadcrumb.Item active>{cityName}</Breadcrumb.Item>
            </Breadcrumb>
               
            </Col>
        </Row>
        <Row >
            {weatherDetails.map((details, index) => (
                <Col sm="6" md="4" lg="2" key={index} className="mb-3">
                <WeatherDetails weatherInfo={details} />
            </Col>
        ))}
       </Row>
       </>
    );
  }

  if (!fetching && weatherDetails.length === 0) {
    template = <p> No details available </p>;
  }

  return template;
};

export default LocationDetails;
