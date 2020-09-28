import React from "react";
import { Link } from "react-router-dom";
import classes from "./NotFound.module.css";

const NotFound = () => {
  return (
    <div className={classes.notFound}>
      <div className="container">
        <div className="bg-title mb-3 text-center">Page Not Found</div>
        <div className="text-center">
          <Link to="/" className={`btn main-btn`}>
            Go to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export { NotFound };
