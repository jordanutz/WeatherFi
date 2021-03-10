import React from "react";
import { Form, Tooltip, Input } from "antd";
import { ReactComponent as Marker } from "../assets/marker.svg";

const Search = ({ fetchData }) => (
   <Form
      onFinish={(values) => fetchData(values)}
      className="weather__form"
      initialValues={{
         location: 'test'
      }}
   >
      <Tooltip
         placement="right"
         title={
            "Retrieve the forecast for your destination by searching by city and state (Tampa, FL) or zip code (5 Digit Numerical)"
         }
      >
         <Form.Item
            name="location"
            className="weather__form-item"
            rules={[
               {
                  required: true,
                  message: "This field cannot be empty",
               },
            ]}
         >
            <Input prefix={<Marker />} />
         </Form.Item>
      </Tooltip>
   </Form>
);

export default Search;
