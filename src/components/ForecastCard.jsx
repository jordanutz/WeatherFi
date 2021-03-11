import React from "react";
import { Col, Card, Typography, Space, Divider } from "antd";
import styled from "styled-components";

const { Text } = Typography;

const StyledCard = styled(Card)`
   border-radius: 0.25rem;
   background-color: ${({ active }) => (active === 'true' ? "#a2b0f7;" : "#0a41ae;")}
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
`;

const StyledForecast = styled(Text)`
   font-size: 2rem;
   font-family: "Khula", sans-serif;
   display: flex;
   line-height: 1.2;
   display: flex;
   justify-content: center;
   margin-top: 4px;
   margin-bottom: 8px;
   font-weight: 800;
   color: ${({ active }) => (active === 'true' ? "#0a41ae;" : "#a2b0f7;")};
`

const StyledText = styled(Text)`
   font-size: 1rem;
   font-weight: 800;
   text-align: center;
   font-family: "Khula", sans-serif;
   color: ${({ active }) => (active === 'true' ? "#0a41ae;" : "#a2b0f7;")}
   text-align: ${({ centered }) => centered && "center;"}
   margin-bottom: 4px;
}`;

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
   <Col xs={6} key={index}>
      <StyledCard active={active === index ? 'true' : 'false'} onClick={() => setActive(index)}>
         <img
            className="weather__card-icon"
            src={day.condition.icon}
            alt=""
            role="presentation"
         />
         <StyledText active={active === index ? 'true' : 'false'}>{days[new Date(formatDate(date)).getDay()]}</StyledText>
         <StyledForecast active={active === index ? 'true' : 'false'}>
            {farenheit ? day.avgtemp_f : day.avgtemp_c}
            <Text className="weather__forecast-degree">°</Text>
         </StyledForecast>
         <Space
            direction="horizontal"
            className="weather__forecast-space"
            style={{ justifyContent: "center" }}
         >
            <StyledText active={active === index ? 'true' : 'false'}>
               {farenheit ? day.mintemp_f : day.mintemp_c}°
            </StyledText>
            <Divider type={"vertical"} />
            <StyledText active={active === index ? 'true' : 'false'}>
               {farenheit ? day.maxtemp_f : day.maxtemp_c}°
            </StyledText>
         </Space>
      </StyledCard>
   </Col>
);

export default ForecastCard;
