import React, { Component } from "react";
import "./Iniha.css";
import '@fortawesome/fontawesome-free/css/all.min.css';

class Iniha extends Component {
  render() {
    return (
      <div className="app">
        {/* Header Section */}
        <header className="header">
          <div className="logo">Bhandary Iniha</div>
          <nav className="nav">
            <div>RERA REG. NO.: PRM/KA/RERA/1257/334/PR/191022/005345 </div>
          </nav>
        </header>

        <section className="investment-section">
          <div className="investment-container">
            {/* Left Side: Investment Statistics */}
            <div className="investment-info">
              <div style={{ fontSize: "50px", fontWeight: "bold" }}>
                Elevating Your <br /> Investments
              </div>
              <div className="investment-stats">
                <div className="stat-item">
                  <h3>14%</h3>
                  <p>Target IRR</p>
                </div>
                <div style={{ marginLeft: "-90px" }} className="stat-item">
                  <h3>5.8%</h3>
                  <p>Rental Yield</p>
                </div>
                <div className="stat-item">
                  <h3>₹96 Lacs</h3>
                  <p>Minimum Investment</p>
                </div>
                <div style={{ marginLeft: "-90px" }} className="stat-item">
                  <h3>April 2025</h3>
                  <p>Handover</p>
                </div>
              </div>
            </div>

            {/* Right Side: Learn More Form */}
            <div className="investment-form">
              <div style={{ textAlign: "left" }}>
                <h2>Learn More</h2>
              </div>
              <form>
                <div className="form-group">
                  <label htmlFor="name">Name *</label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email ID *</label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="contact">Contact No *</label>
                  <input
                    type="tel"
                    id="contact"
                    placeholder="Enter your contact number"
                    required
                  />
                </div>
                <button type="submit" className="submit-btn">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </section>

        <div className="investment-summary">
          <div className="summary-text">
            <div style={{fontSize: "50px", fontWeight: "bold"}}>
              Summary
            </div>
            <p>
                Explore smart investment opportunities with Bhandary Iniha,<br/> offering a range of residential and commercial properties for growth.<br/> Secure your future with us!
            </p>
            <button className="download-brochure">Download Brochure</button>
          </div>

          <div className="investment-details">
            <h3>Bhandary Iniha, Alake</h3>
            <p>
                <i style={{paddingRight: "10px"}} className="fas fa-map-marker-alt"></i>Mangalore
            </p>

            <div className="investment-stats">
              <div className="stat-item">
                <h4>Min Investment</h4>
                <p>₹96 Lacs</p>
              </div>
              <div style={{ marginLeft: "-90px" }} className="stat-item">
                <h4>Rental Yield</h4>
                <p>5.8%</p>
              </div>
              <div className="stat-item">
                <h4>Target IRR</h4>
                <p>14%</p>
              </div>
              <div style={{ marginLeft: "-90px" }} className="stat-item">
                <h4>Capital Appreciation</h4>
                <p>8.2%</p>
              </div>
            </div>

            {/* <div className="sales-status">
              <p>
                <strong>₹1,117,800,000</strong> of ₹1,242,000,000
              </p>
              <p>
                <strong>90% Sold Out</strong>
              </p>
            </div> */}
          </div>
        </div>

        {/* Footer Sectionn */}
        <footer className="footer">
          <p>© 2024 Bhandary Iniha Business Centre. All Rights Reserved.</p>
        </footer>
      </div>
    );
  }
}

export default Iniha;
