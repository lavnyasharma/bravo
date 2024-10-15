import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import supabase from "./supabaseClient";
// import iconImage from './assets/icon.png'; 
import {
  Button,
  Col,
  Container,
  Row,
  Nav,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faShareAlt } from "@fortawesome/free-solid-svg-icons";
import "./InterestReceived.css";
import Navigation1_tRoDi3Ka from "./NavigationBar"; // Import header component
import Footer2_wa59NKzY from "./Footer"; // Import footer component

function InterestReceived() {
  const location = useLocation();
  const { registrationNumber } = location.state || {};
  const [vehicleData, setVehicleData] = useState(null);
  const [index, setIndex] = useState(0); // Track carousel index

  useEffect(() => {
    const fetchVehicleData = async () => {
      try {
        const { data, error } = await supabase
          .from("vehicles")
          .select("*")
          .eq("registrationnumber", registrationNumber)
          .single();

        if (error) {
          throw new Error(`Error fetching vehicle data: ${error.message}`);
        }
        setVehicleData(data);
      } catch (error) {
        console.error("Error fetching vehicle data:", error);
      }
    };

    if (registrationNumber) {
      fetchVehicleData();
    }
  }, [registrationNumber]);

  if (!vehicleData) {
    return <div>Loading...</div>;
  }

  // Safely parse image URLs
  let imageUrls = [];
  if (vehicleData.image_urls) {
    try {
      imageUrls = JSON.parse(vehicleData.image_urls);
    } catch (error) {
      console.error("Error parsing image URLs:", error);
    }
  }

  return (
    <>
      <Navigation1_tRoDi3Ka /> {/* Add Header Component */}

      <section className="ezy__epoverview17" id="ezy__epoverview17">
        <Container>
          <Row>
            <Col lg={6}>
              <div className="me-lg-4">
                {imageUrls.length > 0 && (
                  <div
                    className="ezy__epoverview17-image-wrapper text-center rounded-3 overflow-hidden m-2 p-4"
                    style={{
                      backgroundColor: "#f0f0f0", // Greyish background
                    }}
                  >
                    <img
                      src={imageUrls[index].trim()}
                      alt={`Vehicle Image ${index + 1}`}
                      className="ezy__epoverview17-banner img-fluid"
                      style={{
                        maxHeight: "400px",
                        objectFit: "contain",
                        margin: "auto",
                      }} // Larger image with contained fit
                    />
                  </div>
                )}
                <Nav className="d-flex flex-wrap justify-content-center ezy__epoverview17-gallery mt-3">
                  {imageUrls.map((url, i) => (
                    <li
                      className={`rounded-3 overflow-hidden m-2 ${
                        i === index ? "selected-thumbnail" : ""
                      }`}
                      key={i}
                      onClick={() => setIndex(i)}
                      style={{ cursor: "pointer" }}
                    >
                      <img
                        src={url.trim()}
                        alt={`Thumbnail ${i + 1}`}
                        className="img-fluid"
                        style={{
                          width: "70px",
                          height: "70px",
                          objectFit: "cover",
                          border: i === index ? "1px solid #F2F2F2" : "none",
                        }} // Styling thumbnails
                      />
                    </li>
                  ))}
                </Nav>
              </div>
            </Col>
            <Col lg={6} className="mt-4 mt-md-0">
              <div className="vehicle-details">
                <h1 className="ezy__epoverview17-heading mb-3">
                  {vehicleData.make} - {vehicleData.registrationnumber}
                </h1>
                <ul className="ezy__epoverview17-content fw-light mb-4">
                  <li><strong>Tax Status:</strong> {vehicleData.taxstatus}</li>
                  <li><strong>MOT Status:</strong> {vehicleData.motstatus}</li>
                  <li><strong>Year of Manufacture:</strong> {vehicleData.yearofmanufacture}</li>
                  <li><strong>Color:</strong> {vehicleData.colour}</li>
                  <li><strong>Fuel Type:</strong> {vehicleData.fueltype}</li>
                </ul>
              </div>

              <Row className="align-items-center">
                {/* <Col className="d-flex">
                  <Button
                    variant=""
                    type="button"
                    className="ezy__epoverview17-btn text-uppercase align-items-center px-3 px-sm-5 me-1 w-100"
                  >
                    Contact Us
                  </Button>
                </Col> */}
                <Col sm="auto">
                  <Button
                    variant="link"
                    type="button"
                    className="ezy__epoverview17-fav d-inline-flex align-items-center text-decoration-none"
                  >
                    {/* <FontAwesomeIcon icon={faHeart} className="fs-5" /> */}
                    <div style={{ display: 'inline-block' }}>
      {/* Using the image as an icon */}
      <img
        src="/handshake.png"
        alt="Icon"
        style={{ width: '50px', height: '50px', cursor: 'pointer' }}  // Icon size and styling
      />
    </div>
                  </Button>
                  <Button
                    variant="link"
                    type="button"
                    className="ezy__epoverview17-share d-inline-flex align-items-center text-decoration-none"
                  >
                    {/* <FontAwesomeIcon icon={faShareAlt} className="fs-5" /> */}
                  </Button>
                </Col>
              </Row>

              <Row className="mt-4">
                <Col xs={12} lg={10} xl={8}>
                  <p className="ezy__epoverview17-content mb-0">
                    Thank you for your interest in this vehicle. We'll get back to you shortly with more information.
                  </p>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>

      <Footer2_wa59NKzY /> {/* Add Footer Component */}
    </>
  );
}

export default InterestReceived;
