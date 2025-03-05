import axios from 'axios'
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [data,setData]=useState([]);
  useEffect(()=>{
    axios.get('http://localhost:3000/users')
    .then(response=>setData(response.data))
    .catch(error=>console.error("error in fetching: ",error))
  },[])
  console.log(data)
  return (
    <div>
      <h1>Table</h1>
      <div>
      <button>
        <Link to='/create' >Add+</Link>
        </button>
      <table border='1'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((users,i)=>(
            <tr key={i}>
              <td>{users.id}</td>
              <td>{users.name}</td>
              <td>{users.email}</td>
              <td>{users.phone}</td>
              <td>
                <button>Read</button>
                <button>Edit</button>
                <button>delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  )
}

export default Home