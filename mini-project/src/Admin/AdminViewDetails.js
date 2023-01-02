import React, { useState, useEffect, useNavigate } from 'react'
import { Container, Table, Button } from 'reactstrap'


const AdminViewDetails = () => {

    const [defectDetails, setdefectdetails] = useState([])
    useEffect(() => { fetchdefectdetails() }
        , [])
    const fetchdefectdetails = async () => {
        const data = await fetch("http://localhost:5000/DefectDetails")
        const pasredData = await data.json()
        console.log(pasredData)
        setdefectdetails(pasredData)
    }
    const updateUser = async (todo) => {
        //     console.log(todo.id);
        //     const data1=await fetch("http://localhost:5000/DefectDetails")
        //     const parsedata= await data1.json()
        //     console.log(parsedata)
        //     setsingleuser(parsedata)
        //      setsingleuser(todo)
        
        const requestOptions = {
            'method': 'PATCH',
            'body': JSON.stringify({
                status: false
            }),
            'headers': { "Content-type": "application/json" }
        }
        const data = await fetch(`http://localhost:5000/DefectDetails/${todo.id}`, requestOptions)
        const response = await data.json();
        fetchdefectdetails();
        console.log(response)
        //     // navigate("/AdminViewDetails")      
    }
    // function rhythem(s){
    //   if(s==="Open")
    //   return "Close"
    //   else
    //   return "No action Pending"
    // }
    return (
        <div>
            <h3 style={{"textAlign":"center"} }>Admin View Details</h3>
            <Container>
                <Table hover>
                    <thead>
                        <th>Defectcategory</th>
                        <th>Description</th>
                        <th>PRIORITY</th>
                        <th>STATUS</th>
                        <th>CHANGE STATUS</th>

                    </thead>
                    <tbody>
                        {
                            defectDetails.map((singleuser) => {  
                                return <tr>
                                    <td>{singleuser.defectCategory}</td>
                                    <td>{singleuser.description}</td>
                                    <td>{singleuser.priority}</td>
                                    <td>{singleuser.status?'Open':'Close'}</td>
                                    <td>{singleuser.status?<Button color="success" 
                                    onClick={ ()=>updateUser(singleuser)}
                                    >Update</Button>:<p>No action pending</p>}</td>
                                
                                </tr>
                            }
                            )}
                    </tbody>
                </Table>
            </Container>
        </div>
    )
}

export default AdminViewDetails