import axios from "axios";

const API_BASE_URL = "https://ads.planetmedia.app";

export const postAd = async (adData, jwtToken) => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/api/advertisements`,
      adData, 
      {
        headers: {
          "Content-Type": "application/json", 
          "x-api-key": "f800c786-a103-4c92-a05f-943aa384b91e", 
          Authorization: `Bearer ${jwtToken}`, 
        },
      }
    );

    return response.data; 
  } catch (error) {
    if (error.response && error.response.data) {
      throw new Error(error.response.data.message || "Post Ad failed.");
    }
    throw new Error("Something went wrong. Please try again.");
  }
};
