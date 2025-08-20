import React from "react";
import GetData from "./GetData";

const OtherMeteo = () => {
  const searchParams = new URLSearchParams(window.location.search);
  const city = searchParams.get("city");

  return (
    <div className="container-w">
      <div className="card-w">
        <GetData children={city ? city : "No city selected"} />
      </div>
    </div>
  );
};

export default OtherMeteo;
