
// import {useState, useEffect} from "react"

import { useEffect, useState } from "react"
import axios from "axios";

export default function useGeoLocation() {
    const [locationData, setLocationData] = useState(null)
    useEffect(() => {
        const getLocation  = async ()=>{
            try {
                const res = await axios.get(`http://ip-api.com/json`);
                if( res.status===200) setLocationData(res.data);
            } catch (error) {
                console.log(error);
            }
        }
        getLocation();
    }, []);

  

    return {
        city: locationData?.city,
        country: locationData?.country,
        countryCode: locationData?.countryCode,
        lat: locationData?.lat,
        lon: locationData?.lon,
        region: locationData?.regionName,
        regionCode: locationData?.region,
        timezone: locationData?.timezone,
        zip: locationData?.zip
    }
}