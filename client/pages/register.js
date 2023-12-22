import React, { useState } from 'react';
import axios from 'axios';
const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async(e) => {
    e.preventDefault();
   
    const {data}=await axios.post(`http://localhost:8001/api/register`,{
      name,email,password
    });
    console.log("register response",data);
  };

  return (
    <>
      <h1 className="jumbotron text-center bg-primary square">Register Page</h1>

      <div className="container col-md-4 offset-md-4 pb-4">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="form-control mb-4 p-4"
            value={name}
            placeholder="Enter your name"
            onChange={(e) => setName(e.target.value)}
          />

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
      </div>
    </>
  );
};

export default Register;
