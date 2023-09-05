import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";
import Navbar from "./components/commons/Navbar/Navbar";
import Footer from "./components/commons/Footer/Footer";
import Login from "./pages/Login/Login";
import Otp from "./pages/Otp/Otp";
import Visit from "./pages/Visit/Visit";
import Records from "./pages/Records/Records";
import "./styles/styles.scss";

const App = () => {
  return (
    <AuthContextProvider>
      <div className="App">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/verify" element={<Otp />} />
            <Route path="/visits" element={<Visit />} />
            <Route path="/records/:visitUuid" element={<Records />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </AuthContextProvider>
  );
};

export default App;
