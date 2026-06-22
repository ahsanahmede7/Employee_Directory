import './Navbar.css'
import { Link, Navigate } from "react-router-dom";
import EmployeeForm from './EmployeeForm';
import { useNavigate,Outlet } from 'react-router-dom'
import Home from '../Home';
import { useState } from 'react';
// import {signout} from './Login'

function Navbar() {
    let[user,setUser] = useState(JSON.parse(localStorage.getItem("user")))
    const navigate = useNavigate()
    const currentuser = localStorage.getItem("currentUser")||false
    const navlist = [
        {name:"Home",path:"/"},
        {name:"Employee List",path:"/EmployeeList"},
        {name:"Employee Form",path:"/EmployeeForm"},
        {name:"Employee Card",path:"/EmployeeCard"},
    ]
    function signout () {
    console.log("hello")
  localStorage.removeItem("currentUser");
  navigate("/login");
};
    return (
        <div>
            <div className='navbar'>
                <div className='web-name'>Employee Directory </div>
                <div className='list'>
                   { <ul>
                   { navlist.map((Listname)=>(
                    <li className='li' key={Listname.name}>
                        <button className='List-btn' onClick={()=>navigate(Listname.path)}>
                            {Listname.name}
                        </button>
                    </li>
                   ))}
                  {currentuser&& <li className='li' style={{backgroundColor:"black",color:"White "}}><button
  onClick={() => {
    console.log("Button Clicked");
    signout();
  }}
>
  Signout
</button></li>}
                    </ul>}
                </div>

            </div>
        </div>
    )
}
export default Navbar;