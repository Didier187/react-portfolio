import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="container-not-found">
      <h1 className="heading">404 - Page Not Found</h1>
      <p className="message">The page you are looking for does not exist.</p>
      <Link to="/" className="link">
        Go to Home
      </Link>
    </div>
  );
};

export default NotFound;
