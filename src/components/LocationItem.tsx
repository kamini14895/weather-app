import React from "react";
import ShadowedCard from "../ui/ShadowedCard";
import Button from "react-bootstrap/Button";
import { useHistory, useLocation } from "react-router";

export interface Location {
  title: string;
  woeid: number;
}

const LocationItem: React.FC<{ location: Location }> = ({ location }) => {
  const history = useHistory();
  const {pathname} = useLocation();
  
  const locationClickedHandler = () => history.replace(`${pathname}/${location.woeid}`);

  return (
    <ShadowedCard grow>
      <div className="d-flex justify-content-between">
        <h4>{location.title} </h4>
        <Button variant="primary" size="sm" onClick={locationClickedHandler}>
          {" "}
          View Weather{" "}
        </Button>
      </div>
    </ShadowedCard>
  );
};

export default LocationItem;
