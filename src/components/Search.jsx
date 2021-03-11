import React, { useState, useEffect } from "react";
import { Form, Tooltip, List, Select } from "antd";
import { ReactComponent as Marker } from "../assets/marker.svg";
import axios from 'axios';

const Search = ({ fetchData, location }) => {
   const [userInput, setUserInput] = useState("");
   const [options, setOptions] = useState([]);

   const { Option } = Select;

   useEffect(() => {
      axios.get(`https://api.weatherapi.com/v1/search.json?key=60a1e58642e34987a6c224405212402&q=${userInput}`)
      .then(res => setOptions(res.data))
      .catch(err => console.log(err))
   }, [userInput, setUserInput]);

   return (
      <Form
         onFinish={(values) => fetchData(values)}
         className="weather__form"
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
               <Select
                  showSearch
                  bordered={false}
                  defaultValue={location}
                  placeholder="Search by Location"
                  onSearch={value => setUserInput(value)}
                  onSelect={value => {
                     let selected = options.find(option => option.name === value);
                     let coordinates = {
                        lat: selected.lat, 
                        lon: selected.lon
                     }                     
                  }}
                  suffixIcon={<Marker />}
               >
                  {options.length && options.map(option => (
                     <Option 
                        key={option.id} 
                        value={option.name}
                     >
                        {option.name}
                     </Option>
                  ))}
               </Select>
            </Form.Item>
         </Tooltip>
      </Form>
   );
};

export default Search;
