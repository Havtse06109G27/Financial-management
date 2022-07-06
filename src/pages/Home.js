import React from "react";
import Qricon from "../components/qricons/Qricon";

function Home() {
  return (
    <div className="container">
      <div className="header">
        <div className="user-information flex items-center justify-between px-8 pt-2 pb-4">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-blue-500 rounded-3xl"></div>
            <div className="ml-2.5">
              <p className="text-bold">Nguyễn Văn Anh</p>
              <p className="text-semi-bold">KH021514575</p>
            </div>
          </div>
          <div className="qr-icon-bg">
            <div className="qr-icon">
              <Qricon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
