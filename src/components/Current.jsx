import React from "react";
import { Row, Col, Typography } from "antd";

const { Text } = Typography;

const Current = ({ active, current, farenheit, forecast }) => {

   const renderCurrent = () => (
      active && farenheit ? forecast[active].day.avgtemp_f :
      active && !farenheit ? forecast[active].day.avgtemp_c :
      current && farenheit ? current.temp_f : 
      current && !farenheit ? current.temp_c : null
   ); 

   return (
      <Row>
         <Col xs={24}>
            <Text className="weather__current-condition">
               {current.condition.text}
            </Text>
            <Text className="weather__current-text">
               {renderCurrent()}
               <Text className="weather__current-degree">°</Text>
            </Text>
         </Col>
      </Row>
   );
};

export default Current;
