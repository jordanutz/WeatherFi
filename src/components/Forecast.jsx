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
   <Row gutter={24}>
      {forecast.filter((daily, index) => index < 3).map((daily, index) => (
         <ForecastCard
            key={index}
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
