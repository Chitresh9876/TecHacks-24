import { useState, useEffect } from "react";
import axios from "axios";
import useGeoLocation from "./GeoLoactionApi";
const AqiApi = () => {
  const [data, setData] = useState(null);
  console.log({ city, lat, lon });
  useEffect(() => {
    const { city, lat, lon } = useGeoLocation();
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.weatherbit.io/v2.0/current/airquality?lat=${lat}&lon=${lon}&key=78f3c77d4b214b2594422492daaff915`
        );
        setData(response);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [lat, lon]);
  return <div>AqiApi</div>;
};

export default AqiApi;
