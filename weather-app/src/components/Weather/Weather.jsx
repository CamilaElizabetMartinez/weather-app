import React from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import { WiCloud,WiDayCloudy,WiDayFog,WiDaySunny,WiRain} from "react-icons/wi";
import {IconContext} from 'react-icons'

const Weather = ({ temperature, state}) => {
  
  const stateByName = {
    cloud: WiCloud,
    cloudy: WiDayCloudy,
    fog: WiDayFog,
    sunny: WiDaySunny,
    rain: WiRain 
  }

  const renderState = state => {
    
  }
  return (
    <div>
      <IconContext.Provider value={{size:'5em'}}>
      <WiCloud></WiCloud>
      </IconContext.Provider>
      
      <Typography display="inline" variant="h3">{temperature} </Typography>
    </div>
  );
};

Weather.propTypes = {
  temperature: PropTypes.number.isRequired,
};

export default Weather;
