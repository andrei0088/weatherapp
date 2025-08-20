import React from "react";

const About = () => {
  return (
    <section className="about-wrapper">
      <div className="about-card">
        <h2 className="about-title">About WeatherApp</h2>
        <p className="about-text">
          <strong>WeatherApp</strong> is a modern web application that allows
          you to view real-time weather information for major European cities.
          You can check the current temperature, humidity, wind speed and
          direction, and weather conditions, all in a clean and minimalist
          interface.
        </p>
        <p className="about-text">
          The app is built with React and TypeScript for the frontend, and uses
          a Python Flask backend to fetch data from the OpenWeatherMap API. The
          design is responsive and user-friendly, making it easy to check the
          weather from any device.
        </p>
        <p className="about-text">
          <strong>Made by Soft88A</strong>
        </p>
      </div>
    </section>
  );
};

export default About;
