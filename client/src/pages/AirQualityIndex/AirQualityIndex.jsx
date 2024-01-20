import React from 'react'
import Map from '../../components/Map/Map';


const AirQualityIndex = () => {
  const coordinates = [51.505, -0.09]; // Replace with your desired coordinates

  return (
    <div>
      {/* <Map/> */}
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55001.153104653094!2d76.63115164999999!3d30.504858950000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fdc7a51ae2e25%3A0xe386e9bb60f5cb7a!2sPatel%20Memorial%20National%20College!5e0!3m2!1sen!2sin!4v1705752498287!5m2!1sen!2sin" style={{height:'400px', width:'100%'}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    </div>
  );
}

export default AirQualityIndex
