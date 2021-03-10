import React from "react";
import { Col, Card, Typography, Space, Divider } from "antd";
import styled from 'styled-components';

const { Text } = Typography;

const StyledCard = styled(Card)`
   border-radius: 0.25rem;
   background-color: ${({ active }) => active ? '#a2b0f7;' : '#0a41ae;'}
   border: none;
   min-height: 175px;
   cursor: pointer;
   transition: 0.2s all;

   .ant-card-body {
      display: flex;
      flex-direction: column;
   }

   &:hover {
      background-color: #a2b0f7;
   }
`

const StyledText = styled(Text)`
   font-size: 1rem;
   font-weight: 800;
   font-family: "Khula", sans-serif;
   color: ${({active}) => active ? '#0a41ae;' : '#a2b0f7;'}
   text-align: ${({ centered }) => centered && 'center;' }
`

const ForecastCard = ({ day, date, index, formatDate, farenheit, active, setActive }) => (
   <Col xs={6} key={index}>
      <StyledCard onClick={() => setActive(index)} active={active === index}>
         <img
            className="weather__card-icon"
            src={day.condition.icon}
            alt=""
            role="presentation"
         />
         <StyledText active={active === index} centered>{formatDate(date)}</StyledText>
         <Text className="weather__forecast-avg">
            {farenheit ? day.avgtemp_f : day.avgtemp_c}
            <Text className="weather__forecast-degree">°</Text>
         </Text>
         <Space
            direction="horizontal"
            className="weather__forecast-space"
            style={{ justifyContent: "center" }}
         >
            <StyledText active={active === index}>
               {farenheit ? day.mintemp_f : day.mintemp_c}°
            </StyledText>
            <Divider type={"vertical"} />
            <StyledText active={active === index}>
               {farenheit ? day.maxtemp_f : day.maxtemp_c}°
            </StyledText>
         </Space>
      </StyledCard>
   </Col>
);

export default ForecastCard;
