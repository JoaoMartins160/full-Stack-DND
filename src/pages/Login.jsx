import React, { useState } from "react";
import { useApi } from "../hooks/useApi";

const Login = ({ onSuccessfullLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { data, error, request } = useApi();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    await request("login", {
      method: "POST",
      data: {
        email,
        password,
      },
    });
    if (data) {
      onSuccessfullLogin();
    } else if (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form>
        <label>
          email:
          <input type="text" value={email} onChange={handleEmailChange} />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </label>
        <br />
        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
