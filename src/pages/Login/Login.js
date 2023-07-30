import React from "react";
import LandingSection from "../../components/Landing/LandingSection";
import "./Login.scss";

const Login = () => {
  return (
    <div data-testid="login-container" className="login__container">
      <LandingSection />
    </div>
  );
};

export default Login;
