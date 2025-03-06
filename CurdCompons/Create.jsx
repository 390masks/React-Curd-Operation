import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Create = () => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3000/users", values)
      .then(response => {
        console.log(response);
        navigate('/');
      })
      .catch(error => console.error(error));
  };

  return (
    <div>
      <h1>Provide your details</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label><br />
          <input 
            type="text" 
            id="name" 
            placeholder="Enter your name"
            value={values.name}
            onChange={(e) => setValues({ ...values, name: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="email">E-mail</label><br />
          <input 
            type="email" 
            id="email" 
            placeholder="Enter your Email"
            value={values.email}
            onChange={(e) => setValues({ ...values, email: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="phone">Phone</label><br />
          <input 
            type="tel" 
            id="phone" 
            placeholder="Enter your Phone"
            value={values.phone}
            onChange={(e) => setValues({ ...values, phone: e.target.value })}
          />
        </div>
        <div>
          <button type="submit">Add</button>
          <Link to="/">
            <button type="button">Back</button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Create;
