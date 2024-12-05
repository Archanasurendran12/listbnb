import axios from "axios";

const API_BASE_URL = "https://ads.planetmedia.app";

export const register = async (username, email, password) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/api/auth/local/register`, {
      username,
      email,
      password,
    }, {
      headers: {
        "x-api-key": "f800c786-a103-4c92-a05f-943aa384b91e", 
      }
    });

    return response.data; 
  } catch (error) {
    if (error.response && error.response.data) {
      throw new Error(error.response.data.message || "Registration failed.");
    }
    throw new Error("Something went wrong. Please try again.");
  }
};
