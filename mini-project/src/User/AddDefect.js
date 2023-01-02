import React, { useEffect, useState } from 'react'
import {
    Button,
    Form,
    FormGroup,
    Input,
    Label,Alert
} from 'reactstrap';
import './App.css';
import { useNavigate } from 'react-router-dom';
import AuthenticationService from '../service/AuthenticationService';

const AddDefect = () => {
    // const[defects,setDefects]=useState([]);
    // useEffect(
    //     async()=>{
    //         const data=await fetch("http://localhost:5000/Defects")
    //        const pasredData= await data.json()
    //        setDefects(pasredData)
    //        console.log(defects)
    //     }
    // ,[])
    const navigate=useNavigate();
    const [defects, setdefect] = useState([])
    const [singledetails, setsingle] = useState({defectCategory:"",description:"",priority:"",username:""})
    // useEffect(()=>{
    //    const data=fetch("http://localhost:5000/Defects")
    //    const pasredData= data.json()
    //    setdefect(pasredData)
    // },[]);
     useEffect(()=>{fetchDefects()}
     ,[])
    const onChangeHandler = (e) => {
        
        console.log([e.target.name],e.target.value)
        setsingle({ ...singledetails, [e.target.name]: e.target.value })
    }

    const clickHandler = async() => {
        
        const requestOptions = {
            'method': 'POST',
            'body': JSON.stringify({
                 description:singledetails.description, priority: singledetails.priority,status:true,defectCategory:singledetails.defectCategory,username:AuthenticationService.isLoggedIn()
            }),
            'headers': { "Content-type": "application/json" }
        }
        const data = await fetch(`http://localhost:5000/DefectDetails`, requestOptions)
        const response = await data.json();
        console.log(response)
        setsingle({defectCategory:"",description:"",priority:""})
        alert("Data Entered Successfully");
        //navigate("/todos")
    }
    const fetchDefects=async()=>
    {
    const data=await fetch("http://localhost:5000/Defects")
    const pasredData= await data.json()
    console.log(pasredData)
    setdefect(pasredData)
    // console.log(pasredData[0].id)
    }
    return (
        
        <div className="App">
            
            <h2 style={{"textAlign":"center"}}> AddDefect</h2>
            <button type="button" class="btn btn-success mx-3" onClick={()=>{navigate("/userviewdetails")}}>View Details</button><br></br>
            <Form className="form">
                <FormGroup>
                    <Label for="exampleEmail">Defect Category</Label>
                    {/* <div class="dropdown">
                        
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton" value={defects} onChange={onChangeHandler}>
                            <a class="dropdown-item" href="#">Action</a>
                            <a class="dropdown-item" href="#">Another action</a>
                            <a class="dropdown-item" href="#">Something else here</a>
                        </div>
                    </div> */}
                    <br></br>
                    <select value={singledetails.defectCategory} onChange={onChangeHandler} name="defectCategory">
                        { defects.map((defect)=>{
                            return <option value={defect.Category}>{defect.Category}</option>
                        })}
                    </select>
                </FormGroup>
                <FormGroup>
                    <Label for="description">Add Description</Label>
                    <Input
                        type="textarea"
                        name="description"
                        id="description"
                        placeholder=""
                        onChange={onChangeHandler}
                        value={singledetails.description}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="priority">Priority</Label>
                    <Input
                        type="number"
                        name="priority"
                        id="priority"
                        placeholder=""
                        onChange={onChangeHandler}
                        value={singledetails.priority}
                    />
                </FormGroup>
                <Button onClick={clickHandler}>Submit</Button>
            </Form>
        </div>
    );

}

export default AddDefect