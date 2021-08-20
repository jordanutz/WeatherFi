import React, { useContext } from "react";
import { WeatherContext } from "../context";

const Current = () => {
   const {
      active,
      farenheit,
      state: { current, forecast },
   } = useContext(WeatherContext);
   const currentCondition = current.condition.text;

   const renderCurrent = () =>
      active && farenheit
         ? forecast[active].day.avgtemp_f
         : active && !farenheit
         ? forecast[active].day.avgtemp_c
         : current && farenheit
         ? current.temp_f
         : current && !farenheit
         ? current.temp_c
         : null;

   return (
      <section className="weather__current">
         <section className="weather__current-condition">
            {currentCondition}
         </section>
         <section className="weather__current-text">
            {renderCurrent()}
            <span className="weather__current-degree">°</span>
         </section>
      </section>
   );
};

export default Current;
