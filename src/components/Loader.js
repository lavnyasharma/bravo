// Loader.js
import React from 'react';
import { Spinner } from 'react-bootstrap';
import './Loader.css'; // Optionally, add some CSS for styling the loader

const Loader = () => {
  return (
    <div className="loader-container">
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  );
};

export default Loader;
