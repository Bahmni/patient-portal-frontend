import React from "react";
import OtpSection from "../../components/Otp/OtpSection";
import "./Otp.scss";

const Otp = () => {
  return (
    <div data-testid="otp-container" className="otp__container">
      <OtpSection />
    </div>
  );
};

export default Otp;
