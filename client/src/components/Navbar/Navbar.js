import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import {Box} from "@mui/material"

const Navbar = () => {
  return (
    <Box className="container">
    <ul>
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/airQualityIndex'>AQI</Link></li>
      <li><Link to='/waterQualityIndex'>WQI</Link></li>
      {/* <li><Link to='/monitoring'>Monitering Status</Link></li> */}
      <li><Link to='/resource'>Resources</Link></li>
    </ul>
  </Box>
  )
}

export default Navbar
