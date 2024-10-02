
import axios from 'axios';

// Replace with your API Gateway URL
const API_GATEWAY_URL = '/proxy/';

// Function to send a POST request to fetch vehicle details
const searchVehicle = async (registrationNumber) => {
    try {
        const response = await axios.post(API_GATEWAY_URL, { registrationNumber }, {
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin':'*',
            },
        });
        return response.data; // Return the vehicle details
    } catch (error) {
        console.error('Error fetching vehicle details:', error);
        throw error;
    }
};

// Export the function to use in your static website
export { searchVehicle };
