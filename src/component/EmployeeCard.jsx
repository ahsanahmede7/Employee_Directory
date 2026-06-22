import './EmployeeCard.css'
import profileImage from "../images/ahsan.jpg";
import logo from "../images/logo.png"
import { useState } from 'react';
function EmployeeCard(){
// let card = Array.from( {length:10})
const [employee, setEmployee] = useState(
    JSON.parse(localStorage.getItem("EmployeeData")) || []
);

// console.log(data)
const deleteEmployee = (index) => {
    const newData = employee.filter((_, i) => i !== index);

    setEmployee(newData);

    localStorage.setItem("EmployeeData", JSON.stringify(newData));
};
let [view,setView]=useState(false)
function viewinfo(){
setView(!view)
}
    return(
        <>
            <h1 className='EmployeeCard'>Employee Info </h1>
        <div className="Cardcontainer">
        {employee.map((e,index)=>
        <div className="card">
                <div className="picture"><img className='img' src={logo} alt="" /></div>
                <p className='p'>{e.Name}</p>
                {view&&(<div className="info">
                    <p className='p'>{e.Email}</p>
                <p className='p'>{e.Department} Department</p>
                </div>)}
                <div className='button'><button onClick={()=>deleteEmployee(index)} className='Cardbutton'>Delete Employee</button><button className='Cardbutton' onClick={viewinfo}>{view?"Hide Info":"View Info"}</button></div>
            </div>)
            
        }
           
        </div>
        </>
    )
}
export default EmployeeCard