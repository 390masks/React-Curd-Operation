import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

const Update = () => {
 
  const { id } = useParams(); 

  const [values,setValues]=useState({
    name:'',
    email:'',
    phone:''
  })

  const navigate=useNavigate();


  useEffect(() => {
    axios
      .get(`http://localhost:3000/users/${id}`) 
      .then((response) => {
        setValues(response.data)
      })
      .catch((error) => console.error("Error in fetching:", error));
  }, [id]); 

  const handleUpdate=(e)=>{
    e.preventDefault()
    axios.put(`http://localhost:3000/users/${id}`,values)
    .then(respones=>{console.log(respones);
      navigate('/')})
    .catch(error=>console.error(error))
  }

  return (
    <div>
      <div>
        <h1>Update your details</h1>
        <form action="" onSubmit={handleUpdate}>
          <div>
            <label htmlFor="name">Name</label><br />
            <input type="text" placeholder='Enter your name'
            value={values.name}
            onChange={(e)=>setValues({...values,name: e.target.value})}/>
          </div>
          <div>
            <label htmlFor="">E-mail</label><br />
            <input type="text" placeholder='Enter your Email'
            value={values.email}
            onChange={(e)=>setValues({...values,email:e.target.value})}/>
          </div>
          <div>
            <label htmlFor="">phone</label><br />
            <input type="text"  placeholder='Enter your Phone'
            value={values.phone}
            onChange={(e)=>setValues({...values,phone:e.target.value})}/>
          </div>
          <div>
            <button type='submit'>Update </button>
             <button><Link to='/'>Back</Link></button>
             </div>
        </form>
      </div>
    </div>
  )
}

export default Update
