import React from "react";
import { Row } from "antd";

import ForecastCard from "./ForecastCard";

const Forecast = ({
   forecast,
   farenheit,
   formatDate,
   active,
   setActive,
   days,
}) => (
   <Row gutter={16}>
      {forecast.map((daily, index) => (
         <ForecastCard
            {...daily}
            index={index}
            forecast={forecast}
            formatDate={formatDate}
            farenheit={farenheit}
            active={active}
            setActive={setActive}
            days={days}
         />
      ))}
   </Row>
);

export default Forecast;
