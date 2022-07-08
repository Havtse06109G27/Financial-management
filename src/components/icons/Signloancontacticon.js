import React from "react";

const Signloancontacticon = ({
  style = {},
  fill = "none",
  width = "28",
  height = "28",
  className = "",
  viewBox = "0 0 28 28",
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
      opacity="0.4"
      d="M7.50244 23.1586C8.51538 22.111 10.0595 22.1943 10.9489 23.3372L12.1965 24.9443C13.1971 26.2181 14.8154 26.2181 15.8159 24.9443L17.0636 23.3372C17.953 22.1943 19.4971 22.111 20.5101 23.1586C22.7089 25.4205 24.5001 24.6705 24.5001 21.5039V8.09943C24.5001 3.30193 23.3389 2.09961 18.6695 2.09961H9.33065C4.66124 2.09961 3.50006 3.30193 3.50006 8.09943V21.5039C3.51241 24.6705 5.31597 25.4085 7.50244 23.1586Z"
      fill="white"
    />
    <path
      d="M18.1689 8.52413H6.99963C6.42721 8.52413 5.95251 8.11049 5.95251 7.61168C5.95251 7.11287 6.42721 6.69922 6.99963 6.69922H18.1689C18.7413 6.69922 19.216 7.11287 19.216 7.61168C19.216 8.11049 18.7413 8.52413 18.1689 8.52413Z"
      fill="white"
    />
    <path
      d="M15.6954 13.361H7.03505C6.44327 13.361 5.95251 12.9474 5.95251 12.4486C5.95251 11.9498 6.44327 11.5361 7.03505 11.5361H15.6954C16.2871 11.5361 16.7779 11.9498 16.7779 12.4486C16.7779 12.9474 16.2871 13.361 15.6954 13.361Z"
      fill="white"
    />
    <path
      d="M24.5048 16.1765L23.8965 16.797H23.8843L20.198 20.4833C20.0398 20.6415 19.7113 20.8118 19.4802 20.8362L17.8377 21.0795C17.2416 21.1646 16.828 20.7388 16.9131 20.1549L17.1443 18.5003C17.1808 18.2691 17.3389 17.9528 17.4971 17.7825L21.1956 14.0961L21.8039 13.4757C22.2054 13.0742 22.6555 12.7822 23.1422 12.7822C23.5558 12.7822 24.006 12.9769 24.5048 13.4757C25.5997 14.5706 25.2469 15.4344 24.5048 16.1765Z"
      fill="white"
    />
  </svg>
);

export default Signloancontacticon;
