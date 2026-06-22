import React, { useState } from "react";

function Home() {
  let [employee,setEmployee] = useState(JSON.parse(localStorage.getItem("EmployeeData"))||[])

  return (
    <div style={styles.container}>
        <h1 style={styles.heading}>Welcome to the Employee Directory
</h1><br /><br /><br />
<h1 style={styles.heading1}>
    Explore our experienced team members and their professional roles in the company.Detail of Employee Directory
</h1>
    </div>
  )}

const styles = {
  container: {
    minHeight: "100vh",
    backgroundColor: "#0f172a",
    padding: "30px",
    fontFamily: "Arial",
  },
  heading:{
fontSize:"60px",
"text-align":"center",
color:'white'
  },
   heading1:{
fontSize:"40px",
"text-align":"start",
color:'white',
width:"800px",
margin:"0px 200px"
  },
  title: {
    textAlign: "center",
    color: "white",
    fontSize: "32px",
    marginBottom: "30px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "20px",
  },
  card: {
    backgroundColor: "#1e293b",
    padding: "20px",
    borderRadius: "12px",
    color: "white",
    boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
  },
  name: {
    marginBottom: "10px",
    color: "#38bdf8",
  },
  text: {
    margin: "5px 0",
    fontSize: "14px",
  },
  button: {
    marginTop: "10px",
    padding: "8px 12px",
    backgroundColor: "#38bdf8",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    color: "#000",
    fontWeight: "bold",
  },
};

export default Home;