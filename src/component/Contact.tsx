import React from "react";

const Contact = () => {
  return (
    <section className="about-wrapper">
      <div className="about-card">
        <h2 className="about-title">Contact</h2>
        <p className="about-text">
          If you have any questions, suggestions, or feedback about WeatherApp,
          feel free to reach out!
        </p>
        <p className="about-text">
          You can contact me directly at: <br />
          <a href="mailto:andreidavidoiu@gmail.com" className="contact-mail">
            andreidavidoiu@gmail.com
          </a>
        </p>
      </div>
    </section>
  );
};

export default Contact;
