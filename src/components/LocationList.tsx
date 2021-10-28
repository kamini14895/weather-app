import React, { useState } from "react";
import LoadingSpinner from "../ui/LoadingSpinner";
import LocationItem, { Location } from "./LocationItem";
import { Row, Col } from "react-bootstrap";

const LocationList: React.FC = () => {
  const [locations] = useState<Location[]>([{title:"London",woeid:44418},{title:"Southend-on-Sea",woeid:35375},{title:"Luton",woeid:27997},{title:"Cambridge",woeid:14979},{title:"Reading",woeid:32997},{title:"Brighton",woeid:13911},{title:"Ipswich",woeid:24522},{title:"Oxford",woeid:31278},{title:"Northampton",woeid:30599},{title:"Portsmouth",woeid:32452}]);
  const [fetching] = useState(false);

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
