import React from "react";
import GetData from "./GetData";

const Meteo = () => {
  const city: string[] = [
    "Andorra la Vella",
    "Amsterdam",
    "Athens",
    "Belgrade",
    "Berlin",
    "Bern",
    "Bratislava",
    "Brussels",
    "Bucharest",
    "Budapest",
    "Chisinau",
    "Copenhagen",
    "Dublin",
    "Helsinki",
    "Kyiv",
    "Lisbon",
    "Ljubljana",
    "London",
    "Luxembourg",
    "Madrid",
    "Minsk",
    "Monaco",
    "Moscow",
    "Nicosia",
    "Oslo",
    "Paris",
    "Prague",
    "Riga",
    "Rome",
    "San Marino",
    "Skopje",
    "Sofia",
    "Stockholm",
    "Tallinn",
    "Tirana",
    "Vienna",
    "Vilnius",
    "Warsaw",
    "Zagreb",
  ];

  return (
    <div className="container-w">
      {city.map((item, index) => (
        <div className="card-w" key={index}>
          <GetData children={item} />
        </div>
      ))}
    </div>
  );
};

export default Meteo;
