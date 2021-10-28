import React from 'react'
import ShadowedCard from '../ui/ShadowedCard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWind, faTint } from '@fortawesome/free-solid-svg-icons'
import  styles from './WeatherDetails.module.css'; 

export interface WeatherInfo {
    dayName :string,
    dayOrdianl : string;
    maxTemp: string;
    minTemp: string;
    icon: string;
    stateName: string;
    windSpeed: string;
    humidity: string;
}

const WeatherDetails:React.FC<{weatherInfo: WeatherInfo}> = ({weatherInfo}) => {
    return (
        <ShadowedCard grow> 
            <div className="d-flex">
              <h6 className="flex-grow-1">{weatherInfo.dayName} {weatherInfo.dayOrdianl}</h6>
              <p className="text-muted">{weatherInfo.stateName}</p>
            </div>

            <div className="d-flex flex-column text-center mt-5 mb-4">
              <h6 className="display-4 mb-0 font-weight-bold" style={{'color': '#1C2331'}}> {weatherInfo.maxTemp} </h6>
              <span className="small text-muted">{weatherInfo.minTemp}</span>
            </div>
           

            <div className="d-flex align-items-center"> 
              <div className={`flex-grow-1 ${styles['icons-container']}`}>
                <div> <FontAwesomeIcon icon={faWind} className={styles.icon}/> <span className="ms-1"> {weatherInfo.windSpeed} </span></div>
                <div> <FontAwesomeIcon icon={faTint} className={styles.icon}/>  <span className="ms-1"> {weatherInfo.humidity} </span></div>
              </div>
              <div>
                <img src={weatherInfo.icon} alt={weatherInfo.stateName} width="50" style={{'margin': 'auto'}} />
              </div>
            </div>
        </ShadowedCard>
    )
}

export default WeatherDetails
