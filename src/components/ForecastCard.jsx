import React from "react";
import { Col, Card, Typography, Space, Divider } from "antd";

const { Text } = Typography;

const ForecastCard = ({
   day,
   days,
   date,
   index,
   farenheit,
   active,
   setActive,
   formatDate,
}) => (
   <Col xs={8} key={index} className="weather__card-col">
      <Card 
         onClick={() => setActive(index)} 
         className={`weather__card ${active === index ? 'weather__card--active' : ''}`}
      >
         <img
            className="weather__card-icon"
            src={day.condition.icon}
            alt=""
            role="presentation"
         />
         <Text className="weather__card-text">
            {days[new Date(formatDate(date)).getDay()]}
         </Text>
         <Text className='weather__forecast-text'>
            {farenheit ? day.avgtemp_f : day.avgtemp_c}
            <Text className="weather__forecast-degree">°</Text>
         </Text>
         <Space
            direction="horizontal"
            className="weather__forecast-space weather__forecast-space--center"
         >
            <Text style={{opacity: .6}} className="weather__card-text">
               {farenheit ? day.mintemp_f : day.mintemp_c}°
            </Text>
            <Divider type={"vertical"} className="weather__card-divider" />
            <Text className="weather__card-text">
               {farenheit ? day.maxtemp_f : day.maxtemp_c}°
            </Text>
         </Space>
      </Card>
   </Col>
);

export default ForecastCard;
