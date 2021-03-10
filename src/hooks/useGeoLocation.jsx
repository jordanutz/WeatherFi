import { useState, useEffect } from "react";

const useGeoLocation = () => {
   const [location, setLocation] = useState({
      permissions: false,
      loaded: false,
      coordinates: {
         lat: "",
         lng: "",
      },
   });

   const onSuccess = (location) => {
      setLocation({
         permissions: true,
         loaded: true,
         coordinates: {
            lat: location.coords.latitude,
            lng: location.coords.longitude,
         },
      });
   };

   const onError = () => {
      setLocation({
         loaded: true,
         permission: true, 
         ...location,
      });
   };

   useEffect(() => {
      if (!("geolocation" in navigator)) {
         setLocation({
            permissions: false,
            ...location,
         })
      }

      navigator.geolocation.getCurrentPosition(onSuccess, onError);
   }, []);

   return location;
};

export default useGeoLocation;
