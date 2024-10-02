import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import supabase from "./supabaseClient"; // Import Supabase client
import { searchVehicle } from "./api"; // Import your API function
import "./Hero.css";

const Shapes = () => (
  <>
    {/* SVGs and shapes omitted for brevity */}
  </>
);

const SubscribeForm = ({ handleSearch, registrationNumber, setRegistrationNumber }) => (
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
          className="ezy__header34_83e3F1MP-btn rounded-pill"
          onClick={handleSearch}
        >
          Search
        </Button>
      </InputGroup>
    </Form.Group>
  </Form>
);

const Hero = () => {
  const [goUp, setGoUp] = useState(false);
  const [registrationNumber, setRegistrationNumber] = useState("");
  const navigate = useNavigate(); // Initialize useNavigate

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSearch = async () => {
    try {
      // First, search for the vehicle using the external API
      const data = await searchVehicle(registrationNumber);
  
      if (data) {
        const mappedData = {
          registrationnumber: data.registrationNumber,
          taxstatus: data.taxStatus,
          taxduedate: data.taxDueDate,
          artenddate: data.artEndDate,
          motstatus: data.motStatus,
          make: data.make,
          yearofmanufacture: data.yearOfManufacture,
          enginecapacity: data.engineCapacity,
          co2emissions: data.co2Emissions,
          fueltype: data.fuelType,
          markedforexport: data.markedForExport,
          colour: data.colour,
          typeapproval: data.typeApproval,
          eurostatus: data.euroStatus,
          dateoflastv5cissued: data.dateOfLastV5CIssued,
          realdrivingemissions: data.realDrivingEmissions,
          wheelplan: data.wheelplan,
          monthoffirstregistration: data.monthOfFirstRegistration
        };
  
        if (!mappedData.registrationnumber) {
          throw new Error("Registration number is missing");
        }
  
        // Check if the vehicle is already in the database
        const { data: existingVehicle } = await supabase
          .from("vehicles")
          .select("*")
          .eq("registrationnumber", registrationNumber)
          .single();
  
        if (existingVehicle) {
          navigate("/interest-received", { state: { registrationNumber } });
          return;
        }
  
        // If not, insert or update the vehicle data in the database
        const { error } = await supabase
          .from("vehicles")
          .upsert(mappedData, { onConflict: ["registrationnumber"] });
  
        if (error) {
          throw new Error(`Supabase error: ${error.message}`);
        }
  
        navigate("/form", { state: { registrationNumber, vehicleData: mappedData } });
      }
    } catch (error) {
      console.error("Error handling search:", error);
    }
  };
  

  useEffect(() => {
    const onPageScroll = () => {
      if (window.pageYOffset > 600) {
        setGoUp(true);
      } else {
        setGoUp(false);
      }
    };
    window.addEventListener("scroll", onPageScroll);

    return () => {
      window.removeEventListener("scroll", onPageScroll);
    };
  }, []);

  return (
    <header className="ezy__header34_83e3F1MP">
      <Shapes />

      <Container>
        <Row className="align-items-center">
          <Col
            xs={12}
            lg={7}
            className="text-center text-lg-start mb-5 mb-lg-0"
          >
            <h2 className="ezy__header34_83e3F1MP-heading mb-4">
              The more money way to sell your car
            </h2>
            <Row>
              <Col xs={12} lg={8}>
                <p className="ezy__header34_83e3F1MP-sub-heading mb-4">
                  84% of customers get more money*. Get a free, instant valuation.
                </p>
              </Col>
              <Col xs={12} lg={10}>
                <SubscribeForm
                  handleSearch={handleSearch}
                  registrationNumber={registrationNumber}
                  setRegistrationNumber={setRegistrationNumber}
                />
              </Col>
            </Row>
          </Col>
          <Col xs={12} lg={5} className="position-relative text-center">
            <div>
              <img
                src="https://ewsorupyhavslsemnmhd.supabase.co/storage/v1/object/public/car-images/public/M340i-760x360.png"
                alt=""
                className="img-fluid ezy__header34_83e3F1MP-img"
              />
            </div>
          </Col>
        </Row>
      </Container>

      <div
        onClick={scrollToTop}
        className={`scroll-up ${goUp ? "show-scroll" : ""}`}
      >
        <i className="fa-solid fa-angle-up"></i>
      </div>
    </header>
  );
};

export default Hero;
