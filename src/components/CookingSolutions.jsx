import "../styles/CookingSolutions.css";

const services = [
  {
    title: "Product design",

    subtitle_1: "In-house design team",
    text_1:
      "We have a team of engineers and designers that work on the product design and development of our clean cooking solutions.",

    subtitle_2: "In-house design team",
    text_2:
      "We have a team of engineers and designers that work on the product design and development of our clean cooking solutions.",

    subtitle_3: "In-house design team",
    text_3:
      "We have a team of engineers and designers that work on the product design and development of our clean cooking solutions.",

    subtitle_4: "In-house design team",
    text_4:
      "We have a team of engineers and designers that work on the product design and development of our clean cooking solutions.",

    subtitle_5: "In-house design team",
    text_5:
      "We have a team of engineers and designers that work on the product design and development of our clean cooking solutions.",

    subtitle_6: "In-house design team",
    text_6:
      "We have a team of engineers and designers that work on the product design and development of our clean cooking solutions.",

    image: "/Carbon-1.png",
  },

  {
    title: "Manufacturing",

    subtitle_1: "+450K per month capacity",
    text_1:
      "We have a team of engineers and designers that work on the product design and development of our clean cooking solutions.",

    subtitle_2: "In-house design team",
    text_2:
      "We have a team of engineers and designers that work on the product design and development of our clean cooking solutions.",

    subtitle_3: "In-house design team",
    text_3:
      "We have a team of engineers and designers that work on the product design and development of our clean cooking solutions.",

    subtitle_4: "In-house design team",
    text_4:
      "We have a team of engineers and designers that work on the product design and development of our clean cooking solutions.",

    subtitle_5: "In-house design team",
    text_5:
      "We have a team of engineers and designers that work on the product design and development of our clean cooking solutions.",

    subtitle_6: "In-house design team",
    text_6:
      "We have a team of engineers and designers that work on the product design and development of our clean cooking solutions.",

    image: "/Carbon-3.png",
  },
];

function CookingSolutions() {
  return (
    <div className="cooking-solutions-wrapper">
      <h1 className="cooking-title">
        Independent studies validate the benefits of BURN's clean cooking
        solutions​
      </h1>
      <div className="cooking-grid">
        {services.map((service, index) => (
          <div key={index} className="cooking-card">
            <div className="imgBx">
              <img src={service.image} alt={service.title} />
            </div>
            <div className="contentBx">
              <h2>{service.title}</h2>

              <h4>{service.subtitle_1}</h4>
              <p>{service.text_1}</p>

              <h4>{service.subtitle_2}</h4>
              <p>{service.text_2}</p>

              <h4>{service.subtitle_3}</h4>
              <p>{service.text_3}</p>

              <h4>{service.subtitle_4}</h4>
              <p>{service.text_4}</p>

              <h4>{service.subtitle_5}</h4>
              <p>{service.text_5}</p>

              <h4>{service.subtitle_6}</h4>
              <p>{service.text_6}</p>

              <button className="btn btn-primary">Learn More</button>
            </div>

            
          </div>
        ))}
      </div>
    </div>
  );
}

export default CookingSolutions;
