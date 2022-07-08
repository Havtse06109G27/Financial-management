import React from "react";

const Scanqricon = ({
  style = {},
  fill = "none",
  width = "22",
  height = "22",
  className = "",
  viewBox = "0 0 22 22",
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
      d="M4.43077 1.38462C2.7445 1.38462 1.38462 2.7445 1.38462 4.43077V6.50769C1.38462 6.89004 1.07466 7.2 0.692308 7.2C0.309957 7.2 0 6.89004 0 6.50769V4.43077C0 1.9798 1.9798 0 4.43077 0H6.50769C6.89004 0 7.2 0.309957 7.2 0.692308C7.2 1.07466 6.89004 1.38462 6.50769 1.38462H4.43077Z"
      fill="#9194AB"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.8002 0.692308C10.8002 0.309957 11.1101 0 11.4925 0H13.5694C16.0204 0 18.0002 1.9798 18.0002 4.43077V6.50769C18.0002 6.89004 17.6902 7.2 17.3079 7.2C16.9255 7.2 16.6156 6.89004 16.6156 6.50769V4.43077C16.6156 2.7445 15.2557 1.38462 13.5694 1.38462H11.4925C11.1101 1.38462 10.8002 1.07466 10.8002 0.692308Z"
      fill="#9194AB"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17.3078 11.6309C17.6901 11.6309 18.0001 11.9408 18.0001 12.3232V13.5693C18.0001 16.0203 16.0203 18.0001 13.5693 18.0001H12.3232C11.9408 18.0001 11.6309 17.6901 11.6309 17.3078C11.6309 16.9254 11.9408 16.6155 12.3232 16.6155H13.5693C15.2556 16.6155 16.6155 15.2556 16.6155 13.5693V12.3232C16.6155 11.9408 16.9254 11.6309 17.3078 11.6309Z"
      fill="#9194AB"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0.692308 10.7998C1.07466 10.7998 1.38462 11.1098 1.38462 11.4921V13.569C1.38462 15.2553 2.7445 16.6152 4.43077 16.6152H6.50769C6.89004 16.6152 7.2 16.9251 7.2 17.3075C7.2 17.6898 6.89004 17.9998 6.50769 17.9998H4.43077C1.9798 17.9998 0 16.02 0 13.569V11.4921C0 11.1098 0.309957 10.7998 0.692308 10.7998Z"
      fill="#9194AB"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.95879 5.5432C5.71903 5.78296 5.53849 6.19884 5.53849 6.9229V11.0767C5.53849 11.8008 5.71903 12.2167 5.95879 12.4564C6.19855 12.6962 6.61443 12.8767 7.33848 12.8767H10.6616C11.3856 12.8767 11.8015 12.6962 12.0413 12.4564C12.281 12.2167 12.4616 11.8008 12.4616 11.0767V6.9229C12.4616 6.19884 12.281 5.78296 12.0413 5.5432C11.8015 5.30344 11.3856 5.1229 10.6616 5.1229H7.33848C6.61443 5.1229 6.19855 5.30344 5.95879 5.5432ZM4.97972 4.56413C5.57073 3.97312 6.401 3.73828 7.33848 3.73828H10.6616C11.599 3.73828 12.4293 3.97312 13.0203 4.56413C13.6113 5.15514 13.8462 5.98541 13.8462 6.9229V11.0767C13.8462 12.0142 13.6113 12.8445 13.0203 13.4355C12.4293 14.0265 11.599 14.2614 10.6616 14.2614H7.33848C6.401 14.2614 5.57073 14.0265 4.97972 13.4355C4.38871 12.8445 4.15387 12.0142 4.15387 11.0767V6.9229C4.15387 5.98541 4.38871 5.15514 4.97972 4.56413Z"
      fill="#9194AB"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.49225 8.99992C2.49225 8.61757 2.80221 8.30762 3.18456 8.30762H14.8153C15.1977 8.30762 15.5076 8.61757 15.5076 8.99992C15.5076 9.38228 15.1977 9.69223 14.8153 9.69223H3.18456C2.80221 9.69223 2.49225 9.38228 2.49225 8.99992Z"
      fill="#9194AB"
    />
  </svg>
);

export default Scanqricon;
