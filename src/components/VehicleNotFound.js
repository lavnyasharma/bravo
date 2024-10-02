// VehicleNotFound.js

import React, { useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./VehicleNotFound.css"; // Add some styles if needed

const VehicleNotFound = () => {
  const [registrationNumber, setRegistrationNumber] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate("/", { state: { registrationNumber } }); // Redirect to the Hero page with the search term
  };

  return (
    <div className="vehicle-not-found">
      <h2>Vehicle Not Found</h2>
      <p>We couldn't find a vehicle with that registration number. Please try again.</p>
      <Form>
        <Form.Group className="mt-4 mb-0">
          <InputGroup className="d-flex justify-content-center position-relative">
            <input
              type="text"
              className="form-control rounded-pill ps-4 w-100"
              placeholder="Enter registration number"
              value={registrationNumber}
              onChange={(e) => setRegistrationNumber(e.target.value)}
            />
            <Button
              variant=""
              className="rounded-pill"
              onClick={handleSearch}
            >
              Search Again
            </Button>
          </InputGroup>
        </Form.Group>
      </Form>
    </div>
  );
};

export default VehicleNotFound;
