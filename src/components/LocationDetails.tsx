import React, { useState } from "react";
import LoadingSpinner from "../ui/LoadingSpinner";
import WeatherDetails, { WeatherInfo } from "./WeatherDetails";
import {Row, Col } from 'react-bootstrap';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { Link } from "react-router-dom";

const LocationDetails: React.FC = () => {
  const [fetching] = useState(false);
  
  const [weatherDetails] = useState<WeatherInfo[]>([{"dayName":"Wed","dayOrdianl":"27th","maxTemp":"17°","minTemp":"13°","icon":"https://www.metaweather.com/static/img/weather/hc.svg","stateName":"Heavy Cloud","windSpeed":"21kmph","humidity":"74%"},{"dayName":"Thu","dayOrdianl":"28th","maxTemp":"17°","minTemp":"12°","icon":"https://www.metaweather.com/static/img/weather/lc.svg","stateName":"Light Cloud","windSpeed":"20kmph","humidity":"71%"},{"dayName":"Fri","dayOrdianl":"29th","maxTemp":"15°","minTemp":"11°","icon":"https://www.metaweather.com/static/img/weather/lr.svg","stateName":"Light Rain","windSpeed":"23kmph","humidity":"80%"},{"dayName":"Sat","dayOrdianl":"30th","maxTemp":"14°","minTemp":"11°","icon":"https://www.metaweather.com/static/img/weather/lr.svg","stateName":"Light Rain","windSpeed":"21kmph","humidity":"84%"},{"dayName":"Sun","dayOrdianl":"31st","maxTemp":"15°","minTemp":"10°","icon":"https://www.metaweather.com/static/img/weather/hr.svg","stateName":"Heavy Rain","windSpeed":"20kmph","humidity":"81%"}]);
  const [cityName] = useState("")

  let template = <LoadingSpinner></LoadingSpinner>;

  if (!fetching && weatherDetails.length > 0) {
    template = (
        <>
        <Row>
            <Col className="mb-5">
            <Breadcrumb>
            <Breadcrumb.Item  linkAs={Link} linkProps={{to: "/"}}>
                View Locations
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
