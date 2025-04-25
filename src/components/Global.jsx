// Global.jsx
import React from 'react';
import '../styles/Global.css';


const data = [
  {
    img: '/Global-1.png',
    number: '5,447,946',
    label: 'stoves sold'
  },
  {
    img: '/Global-2.png',
    number: '50,911,119',
    label: 'tons of CO₂ reduced'
  },
  {
    img: '/global-3.png',
    number: '$1,891,483,234',
    label: 'household savings'
  },
  {
    img: '/Global-4.png',
    number: '29,687,100',
    label: 'tons of wood saved'
  },
  {
    img: '/Global-5.png',
    number: '27,619,653',
    label: 'lives impacted'
  },
  {
    img: '/Global-6.png',
    number: '2,500',
    label: 'jobs created since 2013'
  }
]; 

const Global = () => {
  return ( 
    <div className="global-impact-section">
      <h2 className="section-title">Our global impact</h2>
      <div className="impact-cards">
        {data.map((item, index) => (
          <div key={index} className="impact-card">
            <img src={item.img} alt={item.label} className="impact-image" />
            <div className="impact-number">{item.number}</div>
            <div className="impact-label">{item.label}</div>
          </div>
        ))}
      </div>
      
      <button className="btn btn-primary">Learn More</button>
    </div>
  );
};

export default Global;
