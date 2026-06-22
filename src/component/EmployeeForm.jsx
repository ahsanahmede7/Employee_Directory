import { useState } from 'react';
import './EmployeeForm.css'



function EmployeeForm() {
    let [employee, setEmployee] = useState({
        Name: '',
        Email: '',
        Department: '',
        Picture: ""
    })
    const [message, setMessage] = useState("");
    let handleChange = (e) => {

        const { name, value, files } = e.target;

        setEmployee({
            ...employee,
            [name]: files ? files[0] : value
        });

    }
 const handleSubmit = (e) => {
    e.preventDefault();

    console.log(employee);
     if (
        !employee.Name &&
        !employee.Email &&
        !employee.Department
    ) {
        alert("Please fill the form first");
        return;
    }
   let olddata = JSON.parse(localStorage.getItem("EmployeeData")) || [];

        // 2. Add new employee
        olddata.push(employee);

        // 3. Save back to localStorage
        localStorage.setItem("EmployeeData", JSON.stringify(olddata));

        // 4. Success message
        setMessage("Employee data submitted successfully!");


    setMessage("Employee data submitted successfully!");
    setEmployee({
    Name: "",
    Email: "",
    Department: "",
    Picture: ""
});
};

    return (

        <div>
            <div className="container">
                    <form onSubmit={handleSubmit}>
                    <div className='forminside'><label className='label' htmlFor="">Employee Name </label><span>{'>>>'}</span>
                    <input className='input' value={employee.Name} name="Name"onChange={handleChange}placeholder="Employee Name"/>
                    </div>
                    <div className='forminside'><label className='label' htmlFor="">Employee Email </label> <span>{'>>>'}</span>
                        <input className='input' type="email" value={employee.Email} name='Email' placeholder="Enter Employee Email" onChange={handleChange} /></div>
                    <div className='forminside'><label className='label' htmlFor="">Employee Department :</label><span>{'>>>'}</span>
                        <input className='input' type="text" value={employee.Department}placeholder="Employee Department" name='Department'onChange={handleChange} /></div>
                    <div className='forminside'><label className='label' htmlFor="">Employee Picture</label><span>{'>>>'}</span>
                        <input className='input choose '  type="file" accept="image/*" name='Picture'  onChange={handleChange} /></div>
               <div style={{width:"100%",display:'flex',justifyContent:'center'}}> <button type='submit' className='Form-submit'>Submit</button></div>
                </form>
                {message && (
    <p className="success-msg">
        {message}
    </p>
)}
            </div>
        </div>
    )
}
export default EmployeeForm;
