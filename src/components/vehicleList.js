import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';  // Changed to useNavigate
import "./VehiclesDashboard.css";
import { fetchVehicles } from './fetchVehicles'; // Assume this is the function to fetch data from Supabase

const VehiclesList = () => {
  const [vehicles, setVehicles] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();  // Changed to useNavigate

  useEffect(() => {
    const getVehicleData = async () => {
      const data = await fetchVehicles();  // Fetching the vehicle data
      setVehicles(data);
      setLoading(false);
    };

    getVehicleData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (vehicles.length === 0) {
    return <p>No vehicles available.</p>;
  }

  const handleViewDetails = (vehicleId) => {
    navigate(`/vehicle/${vehicleId}`);  // Changed to use navigate
  };

  return (
    <Container className="vehicles-dashboard">
      <h5 className="fs-4 fw-bold mb-4 text-center">Vehicle Dashboard</h5>
      <Row>
        {vehicles.map((vehicle) => (
          <Col lg={4} md={6} sm={12} key={vehicle.id} className="mb-4">
            <Card className="vehicle-card">
              <Card.Img variant="top" src={JSON.parse(vehicle.image_urls)[0]} />
              <Card.Body>
                <Card.Title>{vehicle.make}</Card.Title>
                <Card.Text>Registration Number: {vehicle.registrationnumber}</Card.Text>
                <Button variant="primary" onClick={() => handleViewDetails(vehicle.id)}>
                  View Details
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default VehiclesList;
