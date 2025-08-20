import React from "react";
import { useState, useEffect } from "react";

const weather = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/weather?city=Brasov").then((response) => {
      return response.json();
    });
  }, []);
};

export default weather;
