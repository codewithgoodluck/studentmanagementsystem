import { MdEmail } from "react-icons/md";
import axios from "axios";
import { toast } from "react-toastify";

const BACKEND_URL = process.env.MONGO_URI;

export const validateEmail = (email) => {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};

export const RegisterUser = async (userData) => {
  try {
    const response = await axios.post(
      `http://localhost:3000/api/users/register`,
      userData,
      { withCredentials: true }
    );
    // explain this response
    if (response.statusText === "OK") {
      toast.success("Registered successfully");
    }
    return response.data;
    //explain the error message
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();

    toast.error(message);
  }
};

//login user
export const LoginUser = async (userData) => {
  try {
    const response = await axios.post(
      `http://localhost:5000/api/users/login`,
      userData
    );
    if (response.statusText === "OK") {
      toast.success("logged in successfully");
    }
    return response.data;
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();

    toast.error(message);
  }
};

// Logout User
export const logoutUser = async () => {
  try {
    await axios.get(`http://localhost:5000/api/users/logout`);
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    toast.error(message);
  }
};

//get login status
export const getLoginStatus = async () => {
  try {
    const response = await axios.get(
      `http://localhost:5000/api/users/loggedin`
    );
    return response.data;
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    toast.error(message);
  }
};
