import React, { useState } from "react";
import { useNavigate } from "react-router";
import { Grid, Row, Button } from "carbon-components-react";
import OTPInput from "otp-input-react";
import "./OtpSection.scss";
import OtpImg from "../../assets/images/otp.png";
import { verifyPatientOtp, callPost } from "../../utils/api-utils";
import { useAuthContext } from "../../hooks/useAuthContext";

const OtpSection = () => {
  const [OTP, setOTP] = useState("");
  const navigate = useNavigate();

  const { dispatch } = useAuthContext();

  const handleOtpSubmit = async () => {
    const userObj = JSON.parse(localStorage.getItem("Patient"));
    userObj.otp = OTP;
    const res = await callPost(verifyPatientOtp(), userObj);
    if (res.status === 200 && res.authToken) {
      dispatch({
        type: "LOGIN",
        payload: {
          accessToken: res.authToken,
          name: res.data.name,
        },
      });
      localStorage.setItem(
        "Patient",
        JSON.stringify({
          accessToken: res.authToken,
          name: res.data.name,
        })
      );
      navigate("/visits");
    }
  };

  return (
    <Grid className="otp__page">
      <Row className="otp__row">
        <h1>
          Verify your <span className="span__color">OTP</span>
        </h1>
      </Row>
      <Row>
        <img height={"200px"} alt="otp-img" src={OtpImg} />
      </Row>
      <Row className="otp__row">
        <p>
          You have received a one time password <br />
          on your <span className="span__color">registered mobile number</span>
        </p>
      </Row>
      <OTPInput
        value={OTP}
        onChange={(val) => {
          setOTP(val);
        }}
        autoFocus
        OTPLength={6}
        otpType="number"
        disabled={false}
        inputStyles={{
          border: "1px solid #666666",
          borderRadius: "6px",
          width: "8vmin",
          height: "8vmin",
          color: "gray",
          fontWeight: "400",
          marginBottom: "30px",
        }}
      />
      <Button className="otp__button primary__button" onClick={handleOtpSubmit}>
        Verify
      </Button>
    </Grid>
  );
};

export default OtpSection;
