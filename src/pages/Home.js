import React from "react";
import "../App.css";
import ServiceBtn from "../components/btns/ServiceBtn";
import Footer from "../components/footer/Footer";
import Qricon from "../components/icons/Qricon";
import SlideShow from "../components/slides/SlideShow";

function Home() {
  return (
    <div className="container">
      <div className="decoration-right"></div>
      <div className="decoration-left"></div>

      {/* Header */}
      <div className="header">
        <div className="user-information flex items-center justify-between px-8 pt-2 pb-4">
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-3xl human-img"></div>
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

      {/* Body */}
      <div className="section">
        <div className="slider">
          <p className="text-xs font-bold tracking-widest uppercase  py-4 px-6">
            tin tức
          </p>
          <div className="ml-5">
            <SlideShow />
          </div>
        </div>
        <div className="section">
          <div className="py-4 px-6">
            <p className="text-xs font-bold tracking-widest uppercase pb-4">
              dịch vụ vay
            </p>
            <div className="service-btns">
              <ServiceBtn />
            </div>
          </div>
          <div className="px-6">
            <p className="text-xs font-bold tracking-widest uppercase pb-4">
              hỗ trợ
            </p>
            <div>
              <ServiceBtn />
            </div>
          </div>
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Home;
