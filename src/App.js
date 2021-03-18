import React, { useState, useEffect } from "react";
import { Layout, Row, Col, Switch, Typography, Empty, Spin } from "antd";

import useGeoLocation from "./hooks/useGeoLocation";

import Search from "./components/Search";
import Forecast from "./components/Forecast";
import Details from "./components/Details";
import Current from "./components/Current";
import axios from "axios";

import "./styles/App.scss";

const { Content } = Layout;
const { Text } = Typography;

const App = () => {
   const [forecast, setForecast] = useState([]);
   const [location, setLocation] = useState("");
   const [current, setCurrent] = useState({});
   const [farenheit, setFarenheit] = useState(true);
   const [active, setActive] = useState(0);
   const [requesting, setRequesting] = useState(true);

   const userCoordinates = useGeoLocation();
   const { loaded } = userCoordinates;

   useEffect(() => {
      loaded && fetchData();
   }, [loaded]);

   const fetchData = (coordinates = null) => {
      axios
         .get(
            `https://api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_APP_KEY}&q=${
               Object.keys(current).length === 0
                  ? userCoordinates.coordinates.lat
                  : coordinates.lat
            },${
               Object.keys(current).length === 0
                  ? userCoordinates.coordinates.lng
                  : coordinates.lon
            }&days=5&aqi=no&alerts=no`
         )
         .then((res) => {
            const { forecast, current, location } = res.data;

            setForecast(forecast.forecastday);
            setCurrent(current);
            setLocation(`${location.name}, ${location.region}`);
            setRequesting(false);
         })
         .catch((err) => console.log(err));
   };

   const formatDate = (str) => {
      str = str.split("-");
      return `${str[1]}/${str[2]}/${str[0]}`;
   };

   const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
   ];

   const renderDateText = () =>
      !active
         ? "Today"
         : days[new Date(formatDate(forecast[active].date)).getDay()];

   return (
      <Layout className="weather">
         <Content className="weather__content">
            {requesting || Object.keys(current).length === 0 ? (
               <Spin size="large" tip="Loading Results..." />
            ) : (
               !requesting &&
               Object.keys(current).length !== 0 && (
                  <>
                     <Row className="weather__content-row weather__content-row--header">
                        <Col xs={16} className="weather__content-col">
                           <img
                              src={current.condition.icon}
                              className="weather__current-icon"
                              alt=""
                              role="presentation"
                           />
                           <Text className="weather__content-text">
                              <Text className="weather__content-today">
                                 {renderDateText()}
                              </Text>
                              <Text className="weather__content-date">
                                 {formatDate(forecast[active].date)}
                              </Text>
                           </Text>
                        </Col>
                        <Col xs={8}>
                           <Search
                              fetchData={fetchData}
                              location={location}
                              setLocation={setLocation}
                              setRequesting={setRequesting}
                           />
                        </Col>
                     </Row>
                     <Row className="weather__row weather__row--loading weather__row weather__row--body">
                        <Col xs={24}>
                           <Row className="weather__row">
                              <Col xs={12} className="weather__current">
                                 <Current
                                    active={active}
                                    current={current}
                                    farenheit={farenheit}
                                    forecast={forecast}
                                 />
                              </Col>
                              <Col xs={12} className="weather__details">
                                 <Row>
                                    <Col
                                       className="weather__details-col"
                                       xs={24}
                                    >
                                       <Switch
                                          defaultChecked
                                          checkedChildren="F°"
                                          unCheckedChildren="C°"
                                          onChange={() =>
                                             setFarenheit(!farenheit)
                                          }
                                       />
                                    </Col>
                                 </Row>
                                 <Details
                                    current={current}
                                    farenheit={farenheit}
                                    forecast={forecast}
                                    active={active}
                                 />
                              </Col>
                           </Row>
                        </Col>
                        <Col xs={24} className="weather__forecast">
                           <Forecast
                              days={days}
                              forecast={forecast}
                              formatDate={formatDate}
                              farenheit={farenheit}
                              active={active}
                              setActive={setActive}
                           />
                        </Col>
                     </Row>
                  </>
               )
            )}
         </Content>
      </Layout>
   );
};

export default App;
