import React, { useEffect, useState } from "react";
import axios from "axios";
import Map from "../../components/Map/Map";
import Card1 from "../../components/Card/Card";
import useGeoLocation from "../../Api/GeoLoactionApi";

const WaterQualityIndex = () => {
  const coordinates = [51.505, -0.09]; // Replace with your desired coordinates
  const [data, setData] = useState(null);
  const [city, setCity] = useState(null)
  const { lat, lon } = useGeoLocation();
  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(
          `https://api.weatherbit.io/v2.0/current/airquality?lat=${lat}&lon=${lon}&key=78f3c77d4b214b2594422492daaff915`
        )
        .then((res) => {
          setData(res?.data?.data[0])
          setCity(res?.data?.city_name)
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetchData();
  }, [lat]);

  return (
    <div style={{ position: "relative", height: "100vh", width: "100%" }}>
      {/* <Map/> */}
      <div
        style={{
          position: "absolute",
          top: "0px",
          left: "0px",
          height: "100%",
          width: "100%",
          overflowY: "hidden",
          zIndex: "-1",
        }}
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55001.153104653094!2d76.63115164999999!3d30.504858950000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fdc7a51ae2e25%3A0xe386e9bb60f5cb7a!2sPatel%20Memorial%20National%20College!5e0!3m2!1sen!2sin!4v1705752498287!5m2!1sen!2sin"
          style={{ height: "100vh", width: "100%" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <Card1 city={city}
      data = {data} style={{ position: "absolute", transform: "translate(-50%)" }} />
    </div>
  );
};

export default WaterQualityIndex;
