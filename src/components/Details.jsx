import React from "react";
import { Row, Col, Space, Typography } from "antd";
import { ImDroplet } from "react-icons/im";
import { CgThermostat } from "react-icons/cg";
import { GiSunglasses } from "react-icons/gi";
import {
   TiWeatherDownpour,
   TiWeatherWindyCloudy,
   TiWeatherSnow,
} from "react-icons/ti";

const { Text } = Typography;

const Details = ({ active, current, farenheit, forecast }) => (
   <Row className="weather__details-row">
      <Col
         xs={12}
         className="weather__details-col weather__details-col--container"
      >
         <CgThermostat className="weather__details-icon" />
         <Space className="weather__space" direction="vertical" size="small">
            <Text className="weather__details-label">Feels Like</Text>
            <Text>{
               active ? "N/A" : 
               current && farenheit ? current.feelslike_f : current.feelslike_c
            }
               °
            </Text>
         </Space>
      </Col>
      <Col
         xs={12}
         className="weather__details-col weather__details-col--container"
      >
         <TiWeatherDownpour className="weather__details-icon" />
         <Space className="weather__space" direction="vertical" size="small">
            <Text className="weather__details-label">Chance of Rain</Text>
            <Text>
               {forecast[active].day.daily_chance_of_rain}
               %
            </Text>
         </Space>
      </Col>
      <Col
         xs={12}
         className="weather__details-col weather__details-col--container"
      >
         <ImDroplet className="weather__details-icon" />
         <Space className="weather__space" direction="vertical" size="small">
            <Text className="weather__details-label">Humidity</Text>
            <Text>
               {forecast[active].day.avghumidity}%
            </Text>
         </Space>
      </Col>
      <Col
         xs={12}
         className="weather__details-col weather__details-col--container"
      >
         <TiWeatherWindyCloudy className="weather__details-icon" />
         <Space className="weather__space" direction="vertical" size="small">
            <Text className="weather__details-label">Wind (mph)</Text>
            <Text>
               {forecast[active].day.maxwind_mph}
            </Text>
         </Space>
      </Col>
      <Col
         xs={12}
         className="weather__details-col weather__details-col--container"
      >
         <GiSunglasses className="weather__details-icon" />
         <Space className="weather__space" direction="vertical" size="small">
            <Text className="weather__details-label">UV</Text>
            <Text>{forecast[active].day.uv}</Text>
         </Space>
      </Col>
      <Col
         xs={12}
         className="weather__details-col weather__details-col--container"
      >
         <TiWeatherSnow className="weather__details-icon" />
         <Space className="weather__space" direction="vertical" size="small">
            <Text className="weather__details-label">Chance of Snow</Text>
            <Text>
               {forecast[active].day.daily_chance_of_snow}
               %
            </Text>
         </Space>
      </Col>
   </Row>
);

export default Details;
