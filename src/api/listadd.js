import axios from "axios";

const API_BASE_URL = "https://ads.planetmedia.app";

export const fetchAds = async (jwtToken) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/api/advertisements`, {
      headers: {
        "x-api-key": "f800c786-a103-4c92-a05f-943aa384b91e", 
        Authorization: `Bearer ${jwtToken}`, 
      },
    });

    return response.data; 
  } catch (error) {
    if (error.response && error.response.data) {
      throw new Error(error.response.data.message || "Failed to fetch advertisements.");
    }
    throw new Error("Something went wrong. Please try again.");
  }
};
