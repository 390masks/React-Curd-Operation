import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

const Read = () => {
  const [data, setData] = useState({});
  const { id } = useParams(); 
  useEffect(() => {
    axios
      .get(`http://localhost:3000/users/${id}`) 
      .then((response) => setData(response.data))
      .catch((error) => console.error("Error in fetching:", error));
  }, [id]); 

  return (
    <div>
      <h2>User Details</h2>
      <div>
        <strong>Name: </strong>{data.name}
      </div>
      <div>
        <strong>Email: </strong>{data.email}
      </div>
      <div>
        <strong>Phone: </strong>{data.phone}
      </div>
      <div>
        <button><Link to={`/update/${id}`}>Edit</Link></button> 
        <button><Link to='/'>Back</Link></button>
      </div>
    </div>
  );
};

export default Read;
