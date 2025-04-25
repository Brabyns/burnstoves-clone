import '../styles/CarbonProject.css';

const services = [
  {
    title: "Product design",
    subtitle: "In-house design team",
    image: "/Carbon-1.png",
  },
  {
    title: "Manufacturing",
    subtitle: "+450K per month capacity",
    image: "/Carbon-3.png",
  },
  {
    title: "Distribution",
    subtitle: "+20 country sales presence",
    image: "/Carbon-2.png",
  },
  {
    title: "Monitoring, issuance & sale of credits",
    subtitle: "+5M carbon credits issued",
    image: "/Burn-3.png",
  },
];

function CarbonProject() {
  return (
    <div className="carbon-project-wrapper">
      <h1 className="carbon-title">Vertically integrated carbon project developer​</h1>
      <div className="services-grid">
        {services.map((service, index) => (
          <div
            key={index}
            className="service-card"
            style={{ backgroundImage: `url(${service.image})` }}
          >
            <div className="service-overlay">
              <h2>{service.title}</h2>
              <p>{service.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CarbonProject;
