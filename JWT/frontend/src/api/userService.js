import axios from "axios";

const apiUrl = "http://localhost:5000/api/users";

// Create an Axios instance
const axiosInstance = axios.create({ baseURL: apiUrl, withCredentials: true });

// Register user
const registerUser = async (userData) => {
  try {
    const response = await axiosInstance.post("/register", userData);
    return response.data;
  } catch (error) {
    console.error("Registration error:", error.response?.data || error.message);
    throw error;
  }
};

// Login user
const loginUser = async (userData) => {
  try {
    const response = await axiosInstance.post("/login", userData);
    return response.data;
  } catch (error) {
    console.error("Login error:", error.response?.data || error.message);
    throw error;
  }
};

// Logout user
const logoutUser = async () => {
  try {
    await axiosInstance.post("/logout");
  } catch (error) {
    console.error("Logout error:", error.response?.data || error.message);
    throw error;
  }
};

// Get user profile
const getUserProfile = async () => {
  try {
    const response = await axiosInstance.get("/profile");
    return response.data;
  } catch (error) {
    console.error(
      "Fetch profile error:",
      error.response?.data || error.message
    );
    throw error;
  }
};

export { registerUser, loginUser, logoutUser, getUserProfile };
