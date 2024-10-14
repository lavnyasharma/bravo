import React, { useState } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  Row,
} from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import supabase, { supabaseUrl } from './supabaseClient';

import Loader from "./Loader"; // Import the Loader component
import NavigationBar from "./NavigationBar";
import Footer2_wa59NKzY from "./Footer";

function FormPage() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    contactno: "",
    carMileage: "",
    images: [],
  });

  const [loading, setLoading] = useState(false); // Loading state

  const navigate = useNavigate();
  const location = useLocation();
  const { registrationNumber } = location.state || {};

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "images") {
      setFormData({ ...formData, images: [...formData.images, ...Array.from(files)] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Show loader when form is submitted
    const { firstname, lastname, email, contactno, carMileage, images } = formData;

    if (!registrationNumber) {
      console.error('Registration number is required.');
      setLoading(false); // Hide loader if there's an error
      return;
    }

    // Check if the vehicle record exists
    const { data: vehicleData, error: vehicleError } = await supabase
      .from('vehicles')
      .select('*')
      .eq('registrationnumber', registrationNumber);

    if (vehicleError) {
      console.error('Error fetching vehicle data:', vehicleError);
      setLoading(false);
      return;
    }

    if (vehicleData.length === 0) {
      console.error('No vehicle found with the given registration number.');
      setLoading(false); // Hide loader if there's an error
      return;
    }

    // Upload images and store the URLs
    let imageUrls = [];
    for (let image of images) {
      // Sanitize the file name to be URL-safe
      const sanitizedFileName = `${Date.now()}_${image.name.replace(/\s+/g, '_').replace(/[^\w\-\.]/g, '')}`; 

      const { data: uploadData, error: uploadError } = await supabase
        .storage
        .from('car-images')
        .upload(`public/${sanitizedFileName}`, image);

      if (uploadError) {
        console.error('Error uploading image:', uploadError);
        setLoading(false); // Hide loader if there's an error
        return;
      }

      imageUrls.push(`${supabaseUrl}/storage/v1/object/public/car-images/public/${sanitizedFileName}`);
    }

    // Update vehicle record with new data
    const { error: updateError } = await supabase
      .from('vehicles')
      .update({
        firstname,
        lastname,
        email,
        contactno,
        carmileage: carMileage,
        image_urls: imageUrls,
      })
      .eq('registrationnumber', registrationNumber);

    setLoading(false); // Hide loader after form submission

    if (updateError) {
      console.error('Error updating vehicle data:', updateError);
    } else {
      console.log('Vehicle and form data updated successfully');
      navigate('/interest-received', { state: { registrationNumber } });
    }
  };

  return (
    <>
    <NavigationBar/>
      {loading && <Loader />} {/* Show loader when loading */}
      <section
  className="ezy__signup8 d-flex"
  style={{
    marginTop: "50px",
    marginBottom: "50px",
  }}
>
        <Container>
          <Row className="justify-content-center">
            <Col lg={10}>
              <Card className="ezy__signup8-card">
                <Card.Body className="p-0">
                  <Row className="justify-content-between h-100">
                    <Col lg={5}>
                      <div
                        className="ezy__signup8-bg-holder d-none d-lg-block h-100"
                        style={{
                          backgroundImage:
                            "url(https://ewsorupyhavslsemnmhd.supabase.co/storage/v1/object/public/car-images/public/HD-wallpaper-2018-garage-lamborghini-ferrari-porsche-car-hypercar-supercar-sports-america-new.jpg)",
                        }}
                      />
                    </Col>
                    <Col lg={7} className="py-4 py-lg-5">
                      <Row className="align-items-center justify-content-center h-100">
                        <Col xs={11} lg={10}>
                          <Card className="ezy__signup8-form-card" style={{border:0}} >
                            <Card.Body className="p-3 p-md-4 p-lg-5">
                              <h2 className="ezy__signup8-heading mb-3">Vehicle Information Form</h2>
                              <Form onSubmit={handleSubmit}>
                                <Row>
                                  <Col lg={6}>
                                    <Form.Group className="mb-4">
                                      <Form.Label>First Name</Form.Label>
                                      <Form.Control
                                        type="text"
                                        name="firstname"
                                        placeholder="Your First Name"
                                        value={formData.firstname}
                                        onChange={handleChange}
                                        required
                                      />
                                    </Form.Group>
                                  </Col>
                                  <Col lg={6}>
                                    <Form.Group className="mb-4">
                                      <Form.Label>Last Name</Form.Label>
                                      <Form.Control
                                        type="text"
                                        name="lastname"
                                        placeholder="Your Last Name"
                                        value={formData.lastname}
                                        onChange={handleChange}
                                        required
                                      />
                                    </Form.Group>
                                  </Col>
                                  <Col xs={12}>
                                    <Form.Group className="mb-4">
                                      <Form.Label>Email</Form.Label>
                                      <Form.Control
                                        type="email"
                                        name="email"
                                        placeholder="Your Email Address"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                      />
                                    </Form.Group>
                                  </Col>
                                  <Col xs={12}>
                                    <Form.Group className="mb-4">
                                      <Form.Label>Contact Number</Form.Label>
                                      <Form.Control
                                        type="tel"
                                        name="contactno"
                                        placeholder="(123) 456-7890"
                                        value={formData.contactno}
                                        onChange={handleChange}
                                        required
                                      />
                                    </Form.Group>
                                  </Col>
                                  <Col xs={12}>
                                    <Form.Group className="mb-4">
                                      <Form.Label>Car Mileage</Form.Label>
                                      <Form.Control
                                        type="number"
                                        name="carMileage"
                                        placeholder="Car Mileage"
                                        value={formData.carMileage}
                                        onChange={handleChange}
                                        required
                                      />
                                    </Form.Group>
                                  </Col>
                                  <Col xs={12}>
                                    <Form.Group className="mb-4">
                                      <Form.Label>Upload Car Images</Form.Label>
                                      <Form.Control
                                        type="file"
                                        name="images"
                                        accept="image/*"
                                        multiple
                                        onChange={handleChange}
                                      />
                                      <div className="selected-images mt-3">
                                        {formData.images.length > 0 && formData.images.map((image, index) => (
                                          <img 
                                            key={index} 
                                            src={URL.createObjectURL(image)} 
                                            alt={`Selected ${index + 1}`} 
                                            width="100" 
                                            className="image-thumbnail" 
                                          />
                                        ))}
                                      </div>
                                    </Form.Group>
                                  </Col>
                                </Row>
                                <Button variant="" type="submit" className="ezy__signup8-btn-submit w-100">
                                  Submit Form
                                </Button>
                              </Form>
                            </Card.Body>
                          </Card>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
      <Footer2_wa59NKzY/>
    </>
  );
}

export default FormPage;
