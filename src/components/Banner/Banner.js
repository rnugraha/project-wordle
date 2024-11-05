import React from "react";

function Banner({ message, type = "happy" }) {
  return <div className={`banner ${type}`}>{message}</div>;
}

export default Banner;
