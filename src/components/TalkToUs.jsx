// TalkToUs.jsx
import React from "react";
import "../styles/TalkToUs.css";

const cardData = [
  {
    title: "Become a national distributor",
    text: "Distribution opportunities exist in our core markets",
    image: "/Carbon-2.png", 
  },
  {
    title: "International sales",
    text: "We ship globally from our facilities in Kenya, Nigeria and Asia. Quantities from 3000 to 1million+",
    image: "/Burn-3.png",
  },
  {
    title: "Join our high-impact team",
    text: "Choose a career of impact with a team as passionate as you",
    image: "/Team.png",
  },
];

const TalkToUs = () => {
  return (
    <section className="talk-to-us-section">
      <h2 className="section-title">Talk to us</h2>
      <div className="card-container">
        {cardData.map((card, index) => (
          <div
            className="talk-card"
            key={index}
            style={{ backgroundImage: `url(${card.image})` }}
          >
            <div className="overlay">
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TalkToUs;
