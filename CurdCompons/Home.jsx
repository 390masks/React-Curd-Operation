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
  
  const handleDelete=(id)=>{
    const confirm=window.confirm("Are you sure...!")
    if(confirm){
      axios.delete(`http://localhost:3000/users/${id}`)
      .then(response=>location.reload())
      .catch(error=>console.error(error))
    }
  }

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
                <button><Link to={`/read/${users.id}`}>Read</Link></button>
                <button><Link to={`/update/${users.id}`}>Edit</Link></button>
                <button onClick={(e)=>handleDelete(users.id)}>delete</button>
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
