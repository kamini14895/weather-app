import React from "react";
import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";

const MainNavigation: React.FC = () => {
  return (
    <header className={classes.header}>
      <Link to="/">
        <div className={classes.logo}>My Weather App</div>
      </Link>
    </header>
  );
};

export default MainNavigation;
