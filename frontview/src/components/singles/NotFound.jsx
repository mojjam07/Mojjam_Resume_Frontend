import React from "react";
import "../../styles/notfound.scss";

const NotFound = () => {
  return (
    <div className="not-found-container">
      <h1>
        <>Ooops!</> Page Not Found
      </h1>
      <p>The page you're looking for doesn't exist or has been moved.</p>
    </div>
  );
};

export default NotFound;
