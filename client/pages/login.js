import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import Link from 'next/link';
const Login = () => {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post(`/api/login`, {
        email,
        password,
      });
      console.log("login response", data);

    } catch (err) {
      toast.error(err.response.data, {
        style: {
          maxWidth: '400px', // Adjust the maximum width as needed
        },
      });
      // You can handle the error here, e.g., show an error message to the user
    }
  };

  return (
    <>
      <h1 className="jumbotron text-center bg-primary square">Login Page</h1>

      <div className="container col-md-4 offset-md-4 pb-4">
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            className="form-control mb-4 p-4"
            value={email}
            placeholder="Enter your Email Address"
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            className="form-control mb-4 p-4"
            value={password}
            placeholder="Set a password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit" className="btn btn-block btn-primary">
            Submit
          </button>
        </form>

        <p className="text-center p-3">
          Not yer registered ?{" "}
          <Link href="/register">
            Login
          </Link>
        </p>
      </div>
    </>
  );
};

export default Login;
