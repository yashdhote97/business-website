import React, { Component } from "react";
import "./layout.css";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <div className="contact-hero-section">
          <div className="contact-hero-bg-wrapper">
            <div className="container contact">
              <h1 className="heading">Contact Acme Outdoors</h1>
              <div className="contact-block-wrapper">
                <div className="contact-block">
                  <img
                    src="https://assets.website-files.com/5e7ff3ec0c4ef4c974fa99e3/5e84ba313e8232516a7da902_chat-alt.svg"
                    alt=""
                    className="contact-icon"
                  />
                  <h2>Contact Us</h2>
                  <p>
                    Just want to say hi?&nbsp;We'd love to hear from you. We
                    love our customers and community!&nbsp;
                  </p>
                  <a href="#contact" className="btn w-button w--current">
                    Send Us A Message
                  </a>
                </div>
                <div className="contact-block">
                  <img
                    src="https://assets.website-files.com/5e7ff3ec0c4ef4c974fa99e3/5e850414db1f6ebfba8bc42d_chat-warning.svg"
                    alt=""
                    className="contact-icon"
                  />
                  <h2>Get Support</h2>
                  <p>
                    Have an issue with an order or with a product you purchased
                    from us?&nbsp;Fill out our support form.
                  </p>
                  <a
                    href="https://university.webflow.com/support"
                    target="_blank"
                    rel="noreferrer"
                    className="btn w-button"
                  >
                    Contact Support
                  </a>
                </div>
              </div>
            </div>
            <div className="contact-image-div"></div>
          </div>
        </div>
        <div id="contact" className="content-section">
          <div className="container">
            <div className="contact-wrapper">
              <div className="contact-left">
                <h2>Contact Us</h2>
                <div className="w-richtext">
                  <p>
                    Acme Outdoors
                    <br />
                    123 Rainy Street
                    <br />
                    Oklahoma City, OK 73129
                  </p>
                  <p>
                    ‍<br />
                    <strong>General Inquiries:</strong>&nbsp;(405) 555-5555
                    <br />
                    <strong>Customer Support:</strong>&nbsp;(405) 555-5556
                  </p>
                </div>
              </div>
              <div className="contact-right">
                <h2>Contact Form</h2>
                <p>
                  Send us a message and we'll get back to you as soon as we can!{" "}
                </p>
                <div className="w-form">
                  <form
                    id="email-form"
                    name="email-form"
                    data-name="Email Form"
                  >
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      className="input w-input"
                      maxLength="256"
                      name="name"
                      data-name="Name"
                      placeholder="Enter your name"
                      id="name"
                    />
                    <label htmlFor="email">Email Address</label>
                    <input
                      type="email"
                      className="input w-input"
                      maxLength="256"
                      name="email"
                      data-name="Email"
                      placeholder="Enter your email address"
                      id="email"
                      required=""
                    />
                    <label htmlFor="Message">Your Message</label>
                    <textarea
                      placeholder="Enter your message"
                      maxLength="5000"
                      id="Message"
                      name="Message"
                      data-name="Message"
                      className="input w-input"
                    ></textarea>
                    <input
                      type="submit"
                      value="Submit"
                      data-wait="Please wait..."
                      className="btn w-button"
                    />
                  </form>
                  <div className="success w-form-done">
                    <div>
                      Thank you! Your submission has been received! We'll be in
                      touch soon!
                    </div>
                  </div>
                  <div className="error w-form-fail">
                    <div>
                      Oops! Something went wrong while submitting the form.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Contact;
