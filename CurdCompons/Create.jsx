import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Create = () => {
  const [values,setValues]=useState({
    name:'',
    email:'',
    phone:''
  })

  const navigate=useNavigate();
 
  const handleSubmit=(e)=>{
    e.preventDefault()
    axios.post("http://localhost:3000/users",values)
    .then(respones=>{console.log(respones);
      navigate('/')})
    .catch(error=>console.error(error))
  }

  return (
    <div>
      <div>
        <h1>Provide your details</h1>
        <form action="" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name</label><br />
            <input type="text" placeholder='Enter your name'
            onChange={(e)=>setValues({...values,name:e.target.value})}/>
          </div>
          <div>
            <label htmlFor="">E-mail</label><br />
            <input type="text" placeholder='Enter your Email'
            onChange={(e)=>setValues({...values,email:e.target.value})}/>
          </div>
          <div>
            <label htmlFor="">phone</label><br />
            <input type="text"  placeholder='Enter your Phone'
            onChange={(e)=>setValues({...values,phone:e.target.value})}/>
          </div>
          <div>
            <button type='submit'>Add </button>
             <button><Link to='/'>Back</Link></button>
             </div>
        </form>
      </div>
    </div>
  )
}

export default Create
