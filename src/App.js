import React from "react";
import Login from "./pages/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/commons/Navbar";
import Footer from "./components/commons/Footer";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Login />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
