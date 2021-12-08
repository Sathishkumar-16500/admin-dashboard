
import './App.css';
import React,{useState} from 'react';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import SideBar from './components/sidebar';
import DashBoard from './components/Dashboard';
import AddStudent from './components/AddStudent';
import AllStudents from './components/AllStudents';

export const StudentContext = React.createContext();

function App() {
  let [data,setData]=useState([
    { 
        name:"Sathish",
        grad:"Diploma",
        dept:"Electronics",
        mobile:"123456789",
        email:"sathish@email.com"
    },
    {
        name:"Keerthivasan",
        grad:"Diploma",
        dept:"Electronics",
        mobile:"987654321",
        email:"keerthivasan@email.com"
    }
])
  return <>
  <Router>
    <StudentContext.Provider value={{data,setData}}>
      <div style={{display:"grid",gridTemplateColumns:"15% 85%"}}>
        <div><SideBar/></div>
        <div>
          <Routes>
            <Route path='/dashboard' element={<DashBoard value={{earning:"30,000",annual:"3,60,000",task:"20",pending:26}}/>}/>
            <Route path='/all-students' element={<AllStudents/>}/>
            <Route path='/add-students' element={<AddStudent/>}/>
          </Routes>
        </div>
      </div>
    </StudentContext.Provider>
  </Router>
  </>
}

export default App;
