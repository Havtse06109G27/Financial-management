import React from "react";

const Arrowicon = ({
  style = {},
  fill = "none",
  width = "8",
  height = "16",
  className = "",
  viewBox = "0 0 8 14.28",
}) => (
  <svg
    width={width}
    height={height}
    style={style}
    viewBox={viewBox}
    xmlns="http://www.w3.org/2000/svg"
    className={`svg-icon ${className || ""}`}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1.04207 1.01705C1.25361 0.805515 1.59657 0.805515 1.80811 1.01705L7.24144 6.45038C8.09464 7.30358 8.09464 8.69655 7.24144 9.54975L1.80811 14.9831C1.59657 15.1946 1.25361 15.1946 1.04207 14.9831C0.830539 14.7715 0.830539 14.4286 1.04207 14.217L6.47541 8.78372C6.90554 8.35358 6.90554 7.64655 6.47541 7.21642L1.04207 1.78308C0.830539 1.57155 0.830539 1.22858 1.04207 1.01705Z"
      fill="#B7C3CE"
    />
  </svg>
);

export default Arrowicon;
