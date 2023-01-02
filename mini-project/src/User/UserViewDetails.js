import React, { useState,useEffect } from 'react'
import { Container, Table  , Button} from 'reactstrap'
import AuthenticationService from '../service/AuthenticationService'
const UserViewDetails = (props) => {
    const[defectDetails,setdefectdetails]=useState([])
    const[user,setuser]=useState()
    useEffect(()=>{fetchdefectdetails()}
    ,[])
    const fetchdefectdetails=async()=>
    {
    const data=await fetch("http://localhost:5000/DefectDetails")
    const pasredData= await data.json()
    console.log(pasredData)
   
    setuser(AuthenticationService.isLoggedIn())
    setdefectdetails(pasredData)
    }
    const deleteTodo=async(id)=>{
        const data =await fetch(`http://localhost:5000/DefectDetails/${id}`,{method:'delete'})
        const response = data.json();
        fetchdefectdetails();
    }
  return (
    <div>
        <h3  style={{"textAlign":"center"}}>UserViewDetails</h3>
    <Container>
    <Table  hover >
        <thead>
            <th>Defectcategory</th>
            <th>Description</th>
            <th>PRIORITY</th>
            <th>STATUS</th>
            <th>DELETE</th>
        </thead>
        <tbody>
        {

        defectDetails.map((todo) => {
            if(todo.username===user){
            return <tr>
                <td>{todo.defectCategory}</td>
                <td>{todo.description}</td>
                <td>{todo.priority}</td>
                <td>{todo.status?'Open':'Close'}</td>
                {/* <td><Button color="success" onClick={()=>{updateTodo(todo.id)}}>Update</Button></td> */}
                <td><Button color="danger" onClick={()=>{deleteTodo(todo.id)}}>Delete</Button></td>
            </tr>
            }
        })}
        </tbody>
    </Table>
</Container>
</div>
  )
}

export default UserViewDetails