import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Table, Carousel } from "react-bootstrap";
import { fetchVehicleById } from './fetchVehicles';  // Function to fetch a single vehicle by ID

const VehicleDetails = () => {
  const { id } = useParams();
  const [vehicle, setVehicle] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getVehicleData = async () => {
      const data = await fetchVehicleById(id);  // Fetch vehicle by ID
      setVehicle(data);
      setLoading(false);
    };

    getVehicleData();
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!vehicle) {
    return <p>No vehicle data available.</p>;
  }

  const specifications = [
    { level: "Registration Number", value: vehicle.registrationnumber },
    { level: "Tax Status", value: vehicle.taxstatus },
    { level: "Tax Due Date", value: vehicle.taxduedate },
    { level: "MOT Status", value: vehicle.motstatus },
    { level: "Make", value: vehicle.make },
    { level: "Year of Manufacture", value: vehicle.yearofmanufacture },
    { level: "Engine Capacity", value: `${vehicle.enginecapacity} cc` },
    { level: "CO2 Emissions", value: `${vehicle.co2emissions} g/km` },
    { level: "Fuel Type", value: vehicle.fueltype },
    { level: "Color", value: vehicle.colour },
    { level: "Type Approval", value: vehicle.typeapproval },
    { level: "Euro Status", value: vehicle.eurostatus },
    { level: "Date of Last V5C Issued", value: vehicle.dateoflastv5cissued },
    { level: "Wheel Plan", value: vehicle.wheelplan },
    { level: "Real Driving Emissions", value: vehicle.realdrivingemissions },
    { level: "Mileage", value: `${vehicle.carmileage} miles` },
  ];

  const imageUrls = JSON.parse(vehicle.image_urls);

  return (
    <Container>
      <Row className="justify-content-center">
        <Col lg={8}>
          <h5 className="fs-4 fw-bold mb-4">Vehicle Details</h5>

          <Carousel>
            {imageUrls.map((url, index) => (
              <Carousel.Item key={index}>
                <img
                  className="d-block w-100"
                  src={url}
                  alt={`Vehicle image ${index + 1}`}
                />
              </Carousel.Item>
            ))}
          </Carousel>

          <Table className="mt-4">
            <tbody>
              {specifications.map((specification, i) => (
                <tr key={i}>
                  <td className="px-4 py-3 align-middle w-25 opacity-75">
                    {specification.level}
                  </td>
                  <th className="px-4 py-3 align-middle">
                    {specification.value}
                  </th>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export default VehicleDetails;
