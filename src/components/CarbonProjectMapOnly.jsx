// src/components/CarbonProjectMapOnly.jsx
// import React from 'react';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/CarbonProjectMapOnly.css';
import AfricaCallCenters from './AfricaCallCenters'; // your map component

const CarbonProjectMapOnly = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
      }, []);

  return (
    <div className="carbon-map-container">
      {/* <h2 className="carbon-map-title">Our high impact carbon projects</h2> */}

      <div className="carbon-map-full" data-aos="zoom-in">
        <AfricaCallCenters />
      </div>

      <button className="btn btn-primary">Carbon projects</button>
    </div>
  );
};

export default CarbonProjectMapOnly;
