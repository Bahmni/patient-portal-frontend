import React, { useEffect } from "react";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useNavigate } from "react-router";
import LandingSection from "../../components/Landing/LandingSection";
import "./Login.scss";

const Login = () => {
  const { user } = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/visits");
    }
  }, [user]);

  return (
    <div data-testid="login-container" className="login__container">
      <LandingSection />
    </div>
  );
};

export default Login;
