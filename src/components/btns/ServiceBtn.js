import React from "react";
import Arrowicon from "../icons/Arrowicon";
import Loanlisticon from "../icons/Loanlisticon";
import Loanserviceicon from "../icons/Loanserviceicon";
import Signloancontacticon from "../icons/Signloancontacticon";

function ServiceBtn() {
  const serviceData = [
    {
      id: 1,
      icon_bg: "light-red",
      title: "Đăng ký khoản vay",
      svg: <Loanserviceicon />,
      arrowIcon: <Arrowicon />,
      btn_path: "/loan-register",
    },
    {
      id: 2,
      icon_bg: "ocean",
      title: "Ký hợp đồng vay",
      svg: <Signloancontacticon />,
      arrowIcon: <Arrowicon />,
      btn_path: "/loan-covenant",
    },
    {
      id: 3,
      icon_bg: "tomato",
      title: "Danh sách khoản vay",
      svg: <Loanlisticon />,
      arrowIcon: <Arrowicon />,
      btn_path: "/loan-list",
    },
  ];

  return (
    <div>
      {serviceData.map((item) => (
        <div key={item.id}>
          <div className="service-btn flex items-center justify-between pl-4 pr-5">
            <div className="flex items-center">
              <div className="service-icon pr-4">
                <div className="service-icon-bg" id={item.icon_bg}>
                  <div className="icon">{item.svg}</div>
                </div>
              </div>
              <p className="capitalize text-base font-medium">{item.title}</p>
            </div>
            <div>{item.arrowIcon}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ServiceBtn;
