import React,{useContext} from "react";
import {StudentContext} from '../App'

function AllStudents(props){
    
    let context= useContext(StudentContext);
    console.log(context)
    return(
        <div>
            <table class="table table-striped">
                <thead>
                    <tr>
                    <th scope="col">S.NO</th>
                    <th scope="col">Name</th>
                    <th scope="col">Graduate</th>
                    <th scope="col">Department</th>
                    <th scope="col">Email</th>
                    <th scope="col">Mobile</th>
                    <th scope="col">Options</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        context.data.map((e,i)=>{
                            return<tr key={i}>
                                    <th scope="row">{i+1}</th>
                                    <td>{e.name}</td>
                                    <td>{e.grad}</td>
                                    <td>{e.dept}</td>
                                    <td>{e.email}</td>
                                    <td>{e.mobile}</td>
                                    <td><button className="btn btn-primary">Edit</button>&nbsp;&nbsp;&nbsp;<button className="btn btn-danger">Delete</button></td>

                            </tr>
                        })
                    }
                    
                </tbody>
            </table>
        </div>
    )

}
export default  AllStudents
