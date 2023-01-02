import { Form, FormGroup, Label, Input, Button,FormText,FormFeedback, Alert } from 'reactstrap'
import React, { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const navigate=useNavigate()
const[user,setUser]=useState({username:"",fullname:"",email:"",password:""})
const changeHandler=(e)=>
{
  console.log([e.target.name],e.target.value)
setUser({...user,[e.target.name]:e.target.value})
}
const clickHandler=async()=>{
    console.log("hello")
    const requestOptions = {
        'method': 'POST',
        'body': JSON.stringify({
             username:user.username, fullname: user.fullname,email:user.email,password:user.password
        }),
        'headers': { "Content-type": "application/json" }
    }
    const data = await fetch(`http://localhost:5000/RegisteredUsers`, requestOptions)
    const response = await data.json();
    console.log(response)
    setUser({username:"",fullname:"",email:"",password:""})
    alert("User Registerd Successfully Login Now");
    navigate("/login")
}
  return (
   <div className='container mx-2 my-3  ' style={{ width: '50%', justifyContent: 'center' }} >
    {/* {success && <Alert>Login Sucessful</Alert>}
    {!success && <Alert>Login Failure</Alert>} */}
    
    <Form>
      <FormGroup>
        <Label for="exampleUsername">
        Full Name
        </Label>
        <Input
          id="fullname"
          name="fullname"
          placeholder="Enter Full Name"
          type="text"

           value={user.fullname}
           
           onChange={changeHandler}
        />
      </FormGroup>
      <FormGroup>
        <Label for="exampleUsername">
        User Name
        </Label>
        <Input
          id="username"
          name="username"
          placeholder="Enter UserName"
          type="text"

           value={user.username}
           
           onChange={changeHandler}
        />
      </FormGroup>
      <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label for="Email" className="mr-sm-2">Email</Label>
          <Input type="email" 
          name="email" 
          id="email"
          value={user.email}
          onChange={changeHandler}
         placeholder="something@idk.cool" />
        </FormGroup>
      <FormGroup>
        <Label for="examplePassword">
          Password
        </Label>
        <Input
          id="examplePassword"
          name="password"
          placeholder="Enter password "
          type="password"
          value={user.password}

          onChange={changeHandler}
        />
        
      </FormGroup>
      <Button color="danger" 
      onClick={clickHandler}
      >
        Submit
      </Button>
      <FormGroup>
            <p>Already have an account! <a href="/login">Login</a></p>
        </FormGroup>
    </Form>
  </div>
  )
}

export default Register