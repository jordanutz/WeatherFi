import React, { useContext } from "react";
import { WeatherContext } from "../context";
import { formatDate } from "../helpers/formatDate";
import { getDay } from "../helpers/getDay";

import Search from "./Search";

const Header = () => {
   const {
      active,
      state: { current, forecast },
   } = useContext(WeatherContext);

   const currentDay = getDay();
   const formattedDate = formatDate(forecast[active].date);
   const icon = current.condition.icon;

   return (
      <header className="weather__header">
         <section className="weather__header-details">
            <img
               src={icon}
               className="weather__header-icon"
               alt=""
               role="presentation"
            />
            <section className="weather__header-stamp">
               <span className="weather__header-today">{currentDay}</span>
               <span className="weather__header-date">{formattedDate}</span>
            </section>
         </section>
         <Search />
      </header>
   );
};

export default Header;
