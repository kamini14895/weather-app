import React, { useEffect, useState } from "react";
import MET_WEATHER_API from "../met-weather-api";
import LoadingSpinner from "../ui/LoadingSpinner";
import LocationItem, { Location } from "./LocationItem";
import { Row, Col } from "react-bootstrap";

const LocationList: React.FC = () => {
  const [locations, setLocations] = useState<Location[]>([]);

  const [fetching, setFetching] = useState(false);

  useEffect(() => {
   setFetching(true);
    navigator.geolocation.getCurrentPosition((position) => {
      MET_WEATHER_API.get<Location[]>(
        `location/search/?lattlong=${position.coords.latitude},${position.coords.longitude}`
      )
        .then((res) => {
          setLocations(res.data);
          setFetching(false);
        })
        .catch((e) => {
          console.log(e); // notify user imstead of logging
          setFetching(false);
        });
    });
  }, []);

  let template = <LoadingSpinner />;

  if (!fetching && locations.length > 0) {
    template = (
      <>
        <Row className="mb-5">
          <Col>
            <h1>Please select a city to view its weather</h1>
          </Col>
        </Row>
        <Row>
          {locations.map((location, index) => (
            <Col sm="6" className="mb-3" key={index}>
              <LocationItem location={location} />
            </Col>
          ))}
        </Row>
      </>
    );
  }

  if (!fetching && locations.length === 0) {
    template = <p> No locations loaded </p>;
  }

  return template;
};

export default LocationList;
