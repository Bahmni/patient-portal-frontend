import React, { useState } from "react";
import {
  Grid,
  Row,
  Column,
  TextInput,
  Button,
  ToastNotification,
} from "carbon-components-react";

const LandingSection = () => {
  const [error, setError] = useState("");
  const [id, setId] = useState("");
  const [showToaster, setShowToaster] = useState(false);

  const handleBtnClose = () => {
    setShowToaster(false);
  };

  const checkInput = (val) => {
    setError("");
    setId(val);
  };

  function isAlphanumeric(str) {
    return /^[a-zA-Z0-9]+$/.test(str);
  }

  const submitID = (e) => {
    e.preventDefault();
    if (!isAlphanumeric(id)) {
      setError("Only alphanumeric input is allowed");
    } else {
      setError("");
      setId("");
      setShowToaster(true);
    }
  };

  return (
    <Grid data-testid="landing-section-container" className="hero__container">
      <Row className="hero__content">
        <Column className="hero__text">
          <div className="hero__section">
            <h1>
              Welcome to <span>Patient Portal</span> App
            </h1>
            <p>Patient-Centric Care Made Accessible</p>
            <p>
              Download and Track all your <span>Medical Records</span> with ease
            </p>
            <div className="hero__form">
              <p>
                Enter your hospital ID to <span>get started</span>
              </p>
              <div className="input__section">
                <TextInput
                  data-testid="text-input-desktop"
                  id="text-input-1"
                  labelText=""
                  value={id}
                  type="text"
                  onChange={(event) => checkInput(event.target.value)}
                />
                <p className="error__text">{error}</p>
                <Button
                  data-testid="otp-btn-desktop"
                  className="otp__button primary__button"
                  onClick={submitID}
                >
                  Get OTP
                </Button>
              </div>
            </div>
          </div>
        </Column>
        <Column className="hero___imagesection">
          <img
            className="hero__image"
            src="https://i.ibb.co/rkw0fjk/Header-img.png"
            alt="Header-img"
            border="0"
          />
        </Column>
      </Row>

      <Grid className="hero__content--mobile">
        <Row>
          <Column className="hero__text">
            <div className="hero__section">
              <h1>
                Welcome to <span>Patient Portal</span> App
              </h1>
              <p>Patient-Centric Care Made Accessible</p>
              <p>
                Download and Track all your <span>Medical Records</span> with
                ease
              </p>
              <div className="hero__form">
                <p>
                  Enter your hospital ID to{" "}
                  <span>
                    <b>get started</b>
                  </span>
                </p>
                <div className="input__section">
                  <TextInput
                    data-testid="text-input-mobile"
                    id="text-input-2"
                    labelText=""
                    value={id}
                    type="text"
                    onChange={(event) => checkInput(event.target.value)}
                  />
                  <p className="error__text">{error}</p>
                  <Button
                    data-testid="otp-btn-mobile"
                    className="otp__button primary__button"
                    onClick={submitID}
                  >
                    Get OTP
                  </Button>
                </div>
              </div>
            </div>
          </Column>
        </Row>
        <Row>
          <Column className="hero___imagesection">
            <img
              className="hero__image--mobile"
              src="https://i.ibb.co/rkw0fjk/Header-img.png"
              alt="Header-img"
              border="0"
            />
          </Column>
        </Row>
      </Grid>

      {showToaster && (
        <ToastNotification
          kind="success"
          lowContrast={true}
          role="success"
          title="OTP sent to registered mobile number"
          onClose={handleBtnClose}
          timeout={5000}
          className="toaster__notification"
        />
      )}
    </Grid>
  );
};

export default LandingSection;
