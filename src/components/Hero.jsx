import '../styles/Hero.css';

function Hero() {
  return (
    <div className="hero">
      <video className="hero-video" autoPlay loop muted playsInline>
        <source src="/hero-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="hero-overlay">
        
        <p> BURN introduces its new line of ECOA  electric, biomass and LPG cooking appliances</p>
      </div>
    </div>
  );
}

export default Hero;
