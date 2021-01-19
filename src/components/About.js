import React, { Component } from "react";
import { Link } from "react-router-dom";

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <div className="hero-section about-hero">
          <div className="container">
            <div className="hero-wrapper">
              <h1 className="hero-heading anout-hero-heading">
                Your Adventure
                <br />
                Awaits
              </h1>
              <p className="hero-paragraph">
                Acme Outdoors has everything you need to help you get started
                today. Check out our wonderful collection of gear that will make
                your next adventure complete.
              </p>
              <div className="hero-button-wrapper">
                <Link to="/shop" className="btn light outline w-button">
                  Shop Merch
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="content-section why-acme-sections">
          <div className="container">
            <div className="about-top-block">
              <div className="why-acme-block">
                <div className="why-acme-small-text">Why Acme Outdoors?</div>
                <h2 className="why-acme-heading">
                  We’re the best in the business.
                </h2>
                <p className="why-acme-paragraph">
                  From more than 30 years, we’ve been leading the way across
                  Oklahoma — creating the best possible customer experience
                  since 1989.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="content-section">
          <div className="container">
            <div className="about-columns-wrapper">
              <div className="about-column">
                <img
                  src="https://assets.website-files.com/5e7ff3ec0c4ef4c974fa99e3/5e84b9ccd071025d67c7e431_verified.svg"
                  alt="Warranty Icon"
                  className="image"
                />
                <h3>Lifetime Warranty</h3>
                <p>
                  All our products — whether we make them or not — are backed by
                  our lifetime warranty.
                </p>
              </div>
              <div className="about-column">
                <img
                  src="https://assets.website-files.com/5e7ff3ec0c4ef4c974fa99e3/5e84ba18359d4c7fc8ba04d2_cart.svg"
                  alt="Shopping Cart Icon"
                  className="image"
                />
                <h3>Shopping Experience</h3>
                <p>
                  All our products — whether we make them or not — are backed by
                  our lifetime warranty.
                </p>
              </div>
              <div className="about-column">
                <img
                  src="https://assets.website-files.com/5e7ff3ec0c4ef4c974fa99e3/5e84ba26d07102b2bcc7e4fb_transport.svg"
                  alt="Delivery Icon"
                  className="image"
                />
                <h3>On-time Delivery</h3>
                <p>
                  All our products — whether we make them or not — are backed by
                  our lifetime warranty.
                </p>
              </div>
              <div className="about-column">
                <img
                  src="https://assets.website-files.com/5e7ff3ec0c4ef4c974fa99e3/5e84ba313e8232516a7da902_chat-alt.svg"
                  alt="Service Icon"
                  className="image"
                />
                <h3>Best in className Service</h3>
                <p>
                  All our products — whether we make them or not — are backed by
                  our lifetime warranty.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="content-section">
          <div className="container shop-local-container">
            <div className="content-wrapper">
              <div className="meet-the-owners-wrapper">
                <div className="meet-the-owners-left"></div>
                <div className="meet-the-owners-right">
                  <div className="owners-rich-text w-richtext">
                    <h2>Meet the Owners</h2>
                    <p>
                      John and Jane met on a backpacking adventure in Nepal.
                      John, a former sheep shearer, went on the trip to get some
                      clarity about his next adventures in life. Jane — a
                      Peloton instructor — went on the trip to explore the
                      landscape in Nepal.
                      <br />
                      <br />
                      While on the trip, John and Jane realized that they had
                      one common love — the love for hiking and the love for
                      being outdoors.
                      <br />
                      <br />
                      Returning back to their home state of Oklahoma, John and
                      Jane hatched a plan to launch a retail store centered
                      around their passions. <br />
                      <br />
                      While John handled the sourcing of goods and customer
                      service, Jane focused on the web + e-commerce side of the
                      business, building this website in the best design
                      platform on the web — Webflow!
                      <br />
                      <br />
                      In 1989, John and Jane Doe officially launched Acme
                      Outdoors, the premiere store for outdoor enthusiasts
                      around the state.
                      <br />
                      <br />
                      To this day, John and Jane return to Nepal yearly to
                      ensure that they never forget their roots and where they
                      came from.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content-section">
          <div className="container">
            <div className="owner-bios-wrapper">
              <div className="owner-bio">
                <div className="owner-avatar-wrapper">
                  <img
                    src="https://assets.website-files.com/5e7ff3ec0c4ef4c974fa99e3/5e84d114eef39554b0e943d8_John%20Doe.png"
                    alt="Co-Owner John Doe"
                  />
                </div>
                <h3>John Doe</h3>
                <p className="owner-bio-paragraph">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique. Duis
                  cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                  commodo diam libero vitae erat. Aenean faucibus nibh et justo
                  cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus
                  tristique posuere.
                </p>
              </div>
              <div className="owner-bio">
                <div className="owner-avatar-wrapper">
                  <img
                    src="https://assets.website-files.com/5e7ff3ec0c4ef4c974fa99e3/5e84d11d180ebb04f6b16bd9_Jane%20Doe.png"
                    alt="Co-Owner Jane Doe"
                  />
                </div>
                <h3>Jane Doe</h3>
                <p className="owner-bio-paragraph">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique. Duis
                  cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                  commodo diam libero vitae erat. Aenean faucibus nibh et justo
                  cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus
                  tristique posuere.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-section contact-hero">
          <div className="container">
            <div className="hero-wrapper">
              <h1 className="hero-heading anout-hero-heading">Need Help?</h1>
              <p className="hero-paragraph">
                Need help or assistance?&nbsp;Our team is standing by to make
                sure you get the help you need. Whether you need to adjust an
                order or delivery details, we're ready to help!
              </p>
              <div className="hero-button-wrapper">
                <Link to="/contact" className="btn light outline w-button">
                  Contact Support
                </Link>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default About;
