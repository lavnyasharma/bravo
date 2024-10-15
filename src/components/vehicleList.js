import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import "./VehiclesDashboard.css";
import Navigation1_tRoDi3Ka from "../components/NavigationBar"
import { fetchVehicles, deleteVehicle } from './fetchVehicles'; // Assuming deleteVehicle function exists
import Footer2_wa59NKzY from "../components/Footer"

const VehiclesList = () => {
  const [vehicles, setVehicles] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const getVehicleData = async () => {
      const data = await fetchVehicles();
      setVehicles(data);
      setLoading(false);
    };

    getVehicleData();
  }, []);

  const handleDelete = async (vehicleId) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this vehicle?");
    if (confirmDelete) {
      await deleteVehicle(vehicleId); // Calling the delete function
      setVehicles((prevVehicles) => prevVehicles.filter(vehicle => vehicle.id !== vehicleId)); // Updating the list after deletion
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (vehicles.length === 0) {
    return <p>No vehicles available.</p>;
  }

  const handleViewDetails = (vehicleId) => {
    navigate(`/vehicle/${vehicleId}`);
  };

  return (
    <>
              <Navigation1_tRoDi3Ka/>
      <Container className="vehicles-dashboard">
      <h5 className="fs-4 fw-bold mb-4 text-center">Vehicle Dashboard</h5>
      <Row>
        {vehicles.map((vehicle) => {
          const imageUrls = JSON.parse(vehicle.image_urls || "[]");
          const vehicleImage = imageUrls.length > 0 ? imageUrls[0] : "fallback-image-url.jpg"; // Fallback image

          return (
            <Col lg={4} md={6} sm={12} key={vehicle.id} className="mb-4">
              <Card className="vehicle-card">
                {vehicleImage && (
                  <Card.Img variant="top" src={vehicleImage} alt={vehicle.make} />
                )}
                <Card.Body>
                  <Card.Title>{vehicle.make}</Card.Title>
                  <Card.Text>Registration Number: {vehicle.registrationnumber}</Card.Text>
                  <Button variant="primary" onClick={() => handleViewDetails(vehicle.id)}>
                    View Details
                  </Button>
                  <Button
                    variant="danger"
                    className="ms-2"
                    onClick={() => handleDelete(vehicle.id)}
                  >
                    Delete
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
    <Footer2_wa59NKzY/>
    </>
  
  );
};

export default VehiclesList;
