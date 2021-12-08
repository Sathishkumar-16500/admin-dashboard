import React,{useState,useContext} from "react";
import {StudentContext} from '../App';
import{useNavigate} from 'react-router-dom';

function AddStudent(){

    let context= useContext(StudentContext);
    let history= useNavigate();
    let [name,setName]=useState("");
    let [grad,setGrad]=useState("");
    let [dept,setDept]=useState("");
    let [mobile,setMobile]=useState("");
    let [email,setEmail]=useState("");

    let handleSave = ()=>{
        context.data.push({
            name,
            grad,
            dept,
            mobile,
            email
        })
        history('/all-students')
    }
    console.log(context);
    return(
        <div>
            <h1>ADD STUDENT</h1>
           <div>
                <div className="form-group">
                    <label for="exampleInputPassword1">Name</label>
                    <input type="text" className="form-control"  onChange={(e)=>setName(e.target.value)} placeholder="Enter your name"/>
                </div>

                <div className="form-group">
                    <label for="exampleInputPassword1">Grauduate</label>
                    <input type="text" className="form-control"  onChange={(e)=>setGrad(e.target.value)} placeholder="Enter your Graduate degree"/>
                </div>

                <div className="form-group">
                    <label for="exampleInputPassword1">Department</label>
                    <input type="text" className="form-control"  onChange={(e)=>setDept(e.target.value)} placeholder="Enter your Department"/>
                </div>

                <div className="form-group">
                    <label for="exampleInputPassword1">Mobile</label>
                    <input type="text" className="form-control"  onChange={(e)=>setMobile(e.target.value)} placeholder="Enter your mobile number"/>
                </div>

                <div className="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" onChange={(e)=>setEmail(e.target.value)} placeholder="Enter your email"/>
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                
                <button type="submit" className="btn btn-primary" onClick={handleSave}>Submit</button>
            </div>
        </div>
    )

}
export default  AddStudent
