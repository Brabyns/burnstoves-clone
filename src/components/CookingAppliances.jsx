import "../styles/CookingAppliances.css";

function CookingAppliances() {
  return ( 
    <div className="Container">
      <h1>BURN's revolutionary cooking appliances</h1>
      <div className="cards grid">
        <div className="card card-1">
          <div className="img-box">
            <img src="/Burn-1.png" alt="Burn Cooking Appliances" />
          </div>
          <div className="card-content">
            <h1 className="card-heading">Wood Stoves</h1>
            <p className="card-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Pariatur, sequi.
            </p>
          </div>
        </div>

        <div className="card card-2">
          <div className="img-box">
            <img src="/Burn-8.png" alt="Burn Cooking Appliances" />
          </div>
          <div className="card-content">
            <h1 className="card-heading">Institutonal Stove</h1>
            <p className="card-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Pariatur, sequi.
            </p>
          </div>
        </div>

        <div className="card card-3">
          <div className="img-box">
            <img src="/Burn-2.png" alt="Burn Cooking Appliances" />
          </div>
          <div className="card-content">
            <h1 className="card-heading">Cookware Grill</h1>
            <p className="card-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Pariatur, sequi.
            </p>
          </div>
        </div>

        <div className="card card-4">
          <div className="img-box">
            <img src="/4. Image_appliances.jpg" alt="Burn Cooking Appliances" />

            <div className="card-content">
              <h1 className="card-heading">Electric Stove</h1>
              <p className="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, numquam eveniet ipsum et repellendus rerum veritatis laborum pariatur expedita magni quisquam ipsam laboriosam sunt dicta quae, amet voluptate laudantium! Aliquid expedita labore distinctio nobis doloremque quasi corporis accusamus velit quibusdam, nostrum recusandae qui fugit necessitatibus! Officia soluta dicta voluptate eum.
              </p>
            </div>
          </div>
        </div>

        <div className="card card-5">
          <div className="img-box">
            <img src="/Burn-7.png" alt="Burn Cooking Appliances" />
          </div>
          <div className="card-content">
            <h1 className="card-heading">LPG Stove</h1>
            <p className="card-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Pariatur, sequi.
            </p>
          </div>
        </div>

        <div className="card card-6">
          <div className="img-box">
            <img src="/Burn-4.png" alt="Burn Cooking Appliances" />
          </div>
          <div className="card-content">
            <h1 className="card-heading">Ethanol Stoves</h1>
            <p className="card-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Pariatur, sequi.
            </p>
          </div>
        </div>

        <div className="card card-7">
          <div className="img-box">
            <img src="/Burn-6.png" alt="Burn Cooking Appliances" />
          </div>
          <div className="card-content">
            <h1 className="card-heading">Charcoal Stoves</h1>
            <p className="card-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit quia nobis eum placeat dicta aut beatae sint quas adipisci optio!
            </p>
          </div>
        </div>
      </div>
      <div className="btn-card">
        <button className="btn btn-primary">See All Products</button>
        <button className="btn btn-secondary">Where to Buy</button>
      </div>
    </div>
  );
}

export default CookingAppliances;
