import React from "react";
import Homeicon from "../icons/Homeicon";
import Notificationicon from "../icons/Notificationicon";
import Personalicon from "../icons/Personalicon";
import Scanqricon from "../icons/Scanqricon";

function Footer() {
  const footerIcons = [
    {
      id: 1,
      svgLink: <Homeicon />,
      title: "Trang chủ",
    },
    {
      id: 2,
      svgLink: <Notificationicon />,
      title: "Thông báo",
    },
    {
      id: 3,
      svgLink: <Scanqricon />,
      title: "Quét QR",
    },
    {
      id: 4,
      svgLink: <Personalicon />,
      title: "Cá nhân",
    },
  ];
  return (
    <div className="flex items-center justify-between">
      {footerIcons.map((item) => (
        <div key={item.id} className="flex flex-col items-center">
          <div>{item.svgLink}</div>
          <div>{item.title}</div>
        </div>
      ))}
    </div>
  );
}

export default Footer;
