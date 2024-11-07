// import React from "react";

// export default function pagenotfound() {
//   return <div>404 page not found</div>;
// }
import { Link } from "react-router-dom";
import React from "react";
// src / pagenotfound.js;

const pagenotfound = () => {
  return (
    <div className="error-container">
      <h1 className="error-header">404 - Page Not Found</h1>
      <p className="error-message">
        Sorry, the page you're looking for doesn't exist.
      </p>
      <Link to="/" className="error-link">
        Go back to Home
      </Link>

      {/* Inline CSS */}
      <style jsx>{`
        .error-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100vh;
          background-color: #f0f0f0;
          text-align: center;
        }
        .error-header {
          font-size: 48px;
          margin-bottom: 16px;
        }
        .error-message {
          font-size: 24px;
          margin-bottom: 24px;
        }
        .error-link {
          font-size: 20px;
          color: #007bff;
          text-decoration: none;
        }
        .error-link:hover {
          text-decoration: underline;
        }
      `}</style>
    </div>
  );
};

export default pagenotfound;
