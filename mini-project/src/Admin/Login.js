
import { Form, FormGroup, Label, Input, Button,FormText,FormFeedback, Alert } from 'reactstrap'
import React, { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = (props) => {

const navigate=useNavigate();
const [user,setUser]=useState({username:"",password:""})
const [users,setUsers]=useState([])
const [admins,setAdmins]=useState([])

const[success,setSuccess]=useState(true)
useEffect(()=>{fetchUserDetails()}
,[])
const fetchUserDetails=async()=>
{
const userdata=await fetch("http://localhost:5000/RegisteredUsers")
const userData= await userdata.json()
console.log(userData)
setUsers(userData)
const admindata=await fetch("http://localhost:5000/Admins")
const pasredData= await admindata.json()
console.log(pasredData)
setAdmins(pasredData)
// console.log(pasredData[0].id)
}
const clickHandler=(e)=>
{
  console.log(users)
 users.map((singleuser)=>{
if(user.username===singleuser.username && user.password===singleuser.password)
{
  console.log('loginvalid')
  props.login(user.username)
  //setSuccess(true)
  alert("Welcome User "+singleuser.username);
  navigate("/Adddefect")
}
else{
  console.log('login invlaid')
  //alert("Login Invalid ");
  // setSuccess(false)
  // setTimeout(()=>{setSuccess(true)},3000)
}
})
admins.map((singleadmin)=>{
  if(user.username===singleadmin.name && user.password===singleadmin.password)
  {
    console.log('loginvalid')
    props.login(user.username)
    setSuccess(true)
    alert("Welcome Admin ");
    navigate("/adminviewdetails")
  }
  else{
    console.log('login invlaid')
    
    // setSuccess(false)
    // setTimeout(()=>{setSuccess(true)},3000)
  }
  })
}
const changeHandler=(e)=>
{
  console.log([e.target.name],e.target.value)
setUser({...user,[e.target.name]:e.target.value})
}
  return (
    <div><div className='container mx-2 my-3  ' style={{ width: '50%', justifyContent: 'center' }} >
    {/* {success && <Alert>Login Sucessful</Alert>}
    {!success && <Alert>Login Failure</Alert>} */}
    
    <Form>
      <FormGroup>
        <Label for="exampleUsername">
          Username
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
            <p>Don't have an account? <a href="/register">Click To Register</a></p>
        </FormGroup>
    </Form>
  </div>
  </div>
  )
}

export default Login