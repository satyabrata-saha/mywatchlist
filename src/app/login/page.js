import React from "react";
import axios from "axios";

const Login = async () => {
  const response = await axios.get(`${process.env.BASE_URL}/api/auth/login`);
  console.log(response.data);

  return <div>Login</div>;
};

export default Login;
