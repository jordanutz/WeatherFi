import React, { useContext } from "react";
import { WeatherContext } from "./context";

import Header from "./components/Header";
import Content from "./components/Content";

const App = () => {
   const {
      state: { loaded },
   } = useContext(WeatherContext);

   return (
      <section className="weather">
         <section className="weather__widget">
            {loaded && (
               <>
                  <Header />
                  <Content />
               </>
            )}
         </section>
      </section>
   );
};

export default App;
