import React from 'react';
import '../styles/Development.css';

const Development = () => {
  return (
    <section className="development-section">
      <div className="content">
        <div className="text-block">
          <h1>We develop the highest integrity carbon credits projects</h1>
          <p>Verified by:</p>
          <ul>
            <li>Gold Standard</li>
            <li>MMECD</li>
          </ul>
          <div className="buttons">
            <button className="orange-btn">Carbon credits</button>
            <button className="dark-btn">Carbon projects</button>
          </div>
        </div>

        <div className="image-block" />
      </div>
    </section>
  );
};

export default Development; 
