import React from "react";
import { Routes, Route } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Index from "./pages/Index.js";
import FormPage from "./components/FormPage.jsx";
import InterestReceived from "./components/InterestReceived";
import VehicleNotFound from "./components/VehicleNotFound.js";
import VehicleDetails from "./components/ViewDetail.js";
import VehiclesList from "./components/vehicleList.js";
import Login from "./components/Login.js";  // Import the Login component
import ProtectedRoute from "./components/ProtectedRoute.js";  

const AppRoutes = () => {
    return (
        <Routes>
            <Route exact path="/" element={<Index />} />
            <Route path="form" element={<FormPage />} />
            <Route path="/interest-received" element={<InterestReceived />} />
            <Route path="/vehicle-not-found" element={<VehicleNotFound />} />
            <Route path="/login" element={<Login />} /> {/* Login route */}
            <Route path="/Vehicles" element={<ProtectedRoute element={<VehiclesList />} />} />
            <Route path="/vehicle/:id" element={<ProtectedRoute element={<VehicleDetails />} />} />
        </Routes>
    );
};

export default AppRoutes;
