import React, { useState } from "react";
import {
   Layout,
   Row,
   Col,
   Card,
   Form,
   Input,
   Switch,
   Button,
   Typography,
} from "antd";
import { CalendarOutlined } from "@ant-design/icons";
import { ReactComponent as Marker } from "./assets/marker.svg";
import axios from "axios";

import { ImDroplet } from "react-icons/im";
import { AiTwotoneCalendar } from "react-icons/ai";
import { CgThermostat } from "react-icons/cg";
import { GiSunglasses } from "react-icons/gi";
import {
   TiWeatherDownpour,
   TiWeatherWindyCloudy,
   TiWeatherSnow,
} from "react-icons/ti";

import "./styles/App.scss";

const { Content } = Layout;
const { Text } = Typography;

const App = () => {
   const [forecast, setForecast] = useState([]);
   const [location, setLocation] = useState(null);
   const [current, setCurrent] = useState(null);

   const getData = (values) => {
      axios
         .get(
            `https://api.weatherapi.com/v1/forecast.json?key=60a1e58642e34987a6c224405212402&q=${values.location}&days=7&aqi=no&alerts=no`
         )
         .then((res) => {
            setForecast(res.data.forecast.forecastday);
            setCurrent(res.data.current);
            setLocation(res.data.location);
         })
         .catch((err) => console.log(err));
   };

   return (
      <Layout className="weather">
         <Content className="weather__content">
            <Row
               className="weather__content-row"
               style={{ marginBottom: "8px" }}
            >
               <Col xs={16} style={{display: 'flex', alignItems: 'center'}}>
				   <img src={current && current.condition.icon} alt="" style={{marginRight: '8px'}} />
                  <Text
                     style={{
                        display: 'flex', 
						flexDirection: 'column',
						lineHeight: 1.15
                     }}
                  >
                     <Text style={{
                        fontFamily: "Codec Pro",
                        fontSize: "1.5rem",
                        letterSpacing: "-.5px",
                        color: "#a2b0f7",
                     }}>Today</Text>
					 <Text style={{
                        fontSize: ".9rem",
                        letterSpacing: "-.25px",
						fontWeight: 800,
                        color: "#a2b0f7",
                     }}>Thu | 26 Feb.</Text>
                     {/* {forecast.length && forecast[0].date} */}
                  </Text>
               </Col>
               <Col xs={8}>
                  <Form
                     onFinish={(values) => getData(values)}
                     className="weather__form"
                  >
                     <Form.Item
                        name="location"
                        style={{ marginBottom: 0 }}
                        rules={[
                           {
                              required: true,
                              message: "This field cannot be empty",
                           },
                        ]}
                     >
                        <Input
                           prefix={<Marker />}
                           placeholder="Input a zip code"
                           value="Lexington, KY"
                        />
                     </Form.Item>
                  </Form>
               </Col>
            </Row>
            <Row className="weather__row">
               <Col xs={24}>
                  <Row className="weather__row">
                     <Col xs={11} className="weather__current">
                        <Row>
                           <Col xs={24} style={{ textAlign: "center" }}>
                              <Text style={{ color: "#a2b0f7" }}>
                                 {current && current.condition.text}
                              </Text>
                              <Text className="weather__current-text">
                                 {current && current.temp_f}
                                 <Text
                                    className="weather__current-degree"
                                    style={{
                                       fontSize: "4rem",
                                       color: "#f1f2f6",
                                       marginLeft: "8px",
                                    }}
                                 >
                                    °
                                 </Text>
                              </Text>
                           </Col>
                        </Row>
                     </Col>
                     <Col xs={13} className="weather__details">
                        <Row style={{ marginBottom: "8px" }}>
                           <Col
                              xs={24}
                              style={{
                                 display: "flex",
                                 justifyContent: "flex-end",
                              }}
                           >
                              <Switch
                                 defaultChecked
                                 checkedChildren="F°"
                                 unCheckedChildren="C°"
                              ></Switch>
                           </Col>
                        </Row>

                        <Row style={{ padding: "0 1rem" }}>
                           <Col
                              xs={12}
                              style={{
                                 marginBottom: "8px",
                                 display: "flex",
                                 alignItems: "center",
                              }}
                           >
                              <CgThermostat
                                 style={{ color: "#a2b0f7", fontSize: "18px" }}
                              />
                              <div
                                 style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    paddingLeft: "12px",
                                 }}
                              >
                                 <Text style={{ fontWeight: 800 }}>
                                    Feels Like
                                 </Text>
                                 <Text>{current && current.feelslike_f}°</Text>
                              </div>
                           </Col>
                           <Col
                              xs={12}
                              style={{
                                 marginBottom: "8px",
                                 display: "flex",
                                 alignItems: "center",
                              }}
                           >
                              <TiWeatherDownpour
                                 style={{ color: "#a2b0f7", fontSize: "20px" }}
                              />
                              <div
                                 style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    paddingLeft: "12px",
                                 }}
                              >
                                 <Text style={{ fontWeight: 800 }}>
                                    Chance of Rain
                                 </Text>
                                 <Text>
                                    {forecast.length &&
                                       forecast[0].day.daily_chance_of_rain}
                                    %
                                 </Text>
                              </div>
                           </Col>
                           <Col
                              xs={12}
                              style={{
                                 marginBottom: "8px",
                                 display: "flex",
                                 alignItems: "center",
                              }}
                           >
                              <ImDroplet style={{ color: "#a2b0f7" }} />
                              <div
                                 style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    paddingLeft: "12px",
                                 }}
                              >
                                 <Text style={{ fontWeight: 800 }}>
                                    Humidity
                                 </Text>
                                 <Text>{current && current.humidity}% %</Text>
                              </div>
                           </Col>
                           <Col
                              xs={12}
                              style={{
                                 marginBottom: "8px",
                                 display: "flex",
                                 alignItems: "center",
                              }}
                           >
                              <TiWeatherWindyCloudy
                                 style={{ color: "#a2b0f7", fontSize: "20px" }}
                              />
                              <div
                                 style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    paddingLeft: "12px",
                                 }}
                              >
                                 <Text style={{ fontWeight: 800 }}>
                                    Wind (mph)
                                 </Text>
                                 <Text>{current && current.wind_mph}%</Text>
                              </div>
                           </Col>
                           <Col
                              xs={12}
                              style={{
                                 marginBottom: "8px",
                                 display: "flex",
                                 alignItems: "center",
                              }}
                           >
                              <GiSunglasses
                                 style={{ color: "#a2b0f7", fontSize: "18px" }}
                              />
                              <div
                                 style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    paddingLeft: "12px",
                                 }}
                              >
                                 <Text style={{ fontWeight: 800 }}>UV</Text>
                                 <Text>{current && current.uv}%</Text>
                              </div>
                           </Col>
                           <Col
                              xs={12}
                              style={{
                                 marginBottom: "8px",
                                 display: "flex",
                                 alignItems: "center",
                              }}
                           >
                              <TiWeatherSnow
                                 style={{ color: "#a2b0f7", fontSize: "18px" }}
                              />
                              <div
                                 style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    paddingLeft: "12px",
                                 }}
                              >
                                 <Text style={{ fontWeight: 800 }}>
                                    Chance of Snow
                                 </Text>
                                 <Text>
                                    {forecast.length &&
                                       forecast[0].day.daily_chance_of_snow}
                                    %
                                 </Text>
                              </div>
                           </Col>
                        </Row>
                     </Col>
                  </Row>
               </Col>
               <Col xs={24} style={{ marginTop: "24px" }}>
                  <Row gutter={16}>
                     {forecast.length &&
                        forecast.map((daily, index) => {
                           return (
                              <Col xs={8} key={index}>
                                 <Card className="weather__card">
                                    <Text>Date: {daily.date}</Text>
                                    <Text>
                                       Avg Temp: {daily.day.avgtemp_f}°
                                    </Text>
                                    <Text>
                                       Max Temp: {daily.day.maxtemp_f}°
                                    </Text>
                                    <Text>
                                       Min Temp: {daily.day.mintemp_f}°
                                    </Text>
                                    {/* <Text>Date: {daily.day.condition.icon}</Text> */}
                                 </Card>
                              </Col>
                           );
                        })}
                  </Row>
               </Col>
            </Row>
         </Content>
      </Layout>
   );
};

export default App;

// Icons
{
   /* <CalendarOutlined /> */
}
