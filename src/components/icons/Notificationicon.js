import React from "react";

const Notificationicon = ({
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
      d="M2.39787 6.42565C2.39787 3.32598 4.91624 0.807617 8.0159 0.807617C11.1072 0.807617 13.6339 3.33431 13.6339 6.42565V8.83302C13.6339 9.01256 13.6745 9.27497 13.7514 9.55513C13.8273 9.83194 13.9254 10.0781 14.0148 10.2346L14.9695 11.8202C15.7223 13.0748 15.121 14.71 13.7342 15.1691C10.0167 16.4109 6.00574 16.4108 2.2883 15.1688L2.286 15.168C1.58549 14.9309 1.06039 14.4408 0.825637 13.8068C0.590612 13.1721 0.670489 12.4575 1.05387 11.8204L2.01052 10.2315C2.01071 10.2312 2.01091 10.2308 2.01111 10.2305C2.10262 10.0767 2.2027 9.83135 2.27989 9.55328C2.3573 9.27441 2.39787 9.01238 2.39787 8.83302V6.42565ZM8.0159 2.04768C5.6011 2.04768 3.63793 4.01085 3.63793 6.42565V8.83302C3.63793 9.16179 3.57021 9.54117 3.47477 9.88496C3.37928 10.229 3.24222 10.5871 3.07566 10.8665L3.07427 10.8688L2.11642 12.4597C2.11639 12.4597 2.11645 12.4596 2.11642 12.4597C1.90845 12.8054 1.89662 13.128 1.98854 13.3762C2.08065 13.625 2.30077 13.8635 2.68249 13.993C6.14485 15.1496 9.87991 15.1494 13.3422 13.9926L13.3441 13.992C13.9724 13.7843 14.2532 13.037 13.9068 12.4593C13.9068 12.4592 13.9069 12.4594 13.9068 12.4593L12.9432 10.8589C12.7835 10.582 12.6496 10.2263 12.5555 9.88311C12.4615 9.5406 12.3939 9.1616 12.3939 8.83302V6.42565C12.3939 4.01918 10.4224 2.04768 8.0159 2.04768Z"
      fill="#9194AB"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.89768 1.44338C6.22973 0.596075 7.05411 0 8.01601 0C8.97792 0 9.8023 0.596075 10.1343 1.44338C10.2206 1.66334 10.1743 1.91318 10.015 2.08766C9.85568 2.26214 9.61108 2.33093 9.38419 2.26506C9.15291 2.19791 8.91944 2.14722 8.68277 2.11854L8.68048 2.11826C7.95982 2.02817 7.27881 2.08163 6.64804 2.265C6.42114 2.33096 6.17648 2.26222 6.01713 2.08774C5.85779 1.91326 5.81146 1.66338 5.89768 1.44338Z"
      fill="#9194AB"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.13685 14.8809C6.13685 15.3924 6.34964 15.8697 6.68829 16.2084C7.02694 16.547 7.50429 16.7598 8.01582 16.7598C9.04784 16.7598 9.89479 15.9129 9.89479 14.8809H11.1349C11.1349 16.5977 9.7327 17.9999 8.01582 17.9999C7.16123 17.9999 6.37242 17.6462 5.81143 17.0852C5.25044 16.5243 4.89679 15.7354 4.89679 14.8809H6.13685Z"
      fill="#9194AB"
    />
  </svg>
);

export default Notificationicon;
