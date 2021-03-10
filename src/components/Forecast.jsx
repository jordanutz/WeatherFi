import React from 'react';
import { Row } from 'antd';

import ForecastCard from "./ForecastCard";

const Forecast = ({ forecast, farenheit, active, setActive, formatDate }) => (
   <Row gutter={16}>
      {forecast.length &&
         forecast.map((daily, index) => 
            <ForecastCard 
               {...daily} 
               index={index} 
               formatDate={formatDate}
               forecast={forecast} 
               farenheit={farenheit}
               active={active}
               setActive={setActive} 
            />
         )}
   </Row>
);

export default Forecast;