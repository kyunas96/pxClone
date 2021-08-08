import React from "react";
import Footer from "./base/footer";
import { Link } from "react-router-dom";

const SplashPage = (props) => (
  <div className="splash-page">
    <div className="splash-wrapper">
      <div className="splash-content">
        <h1>Discover and share the world's best photos</h1>
        <Link to="/signup" id="signup-button">
          Sign up
        </Link>
      </div>
    </div>
  <Footer />
  </div>
);

export default SplashPage;
