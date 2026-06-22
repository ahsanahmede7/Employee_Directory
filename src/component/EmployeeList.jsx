import './EmployeeList.css'

function EmployeeList() {
    let data = JSON.parse(localStorage.getItem("EmployeeData")) || []
    console.log(data)

    return (
        <div>
            <h1 className="Heading-list">List Of Employee Data</h1>

            <table>
                <thead>
                    <tr className="heading-table">
                        <td>ID</td>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Department</td>
                    </tr>
                </thead>

                <tbody>
                    {data.map((e, i) => {
                        return (
                            <tr className="table-info" key={i}>
                                <td>{i + 1}</td>
                                <td>{e.Name}</td>
                                <td>{e.Email}</td>
                                <td>{e.Department}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>

        </div>
    )
}

export default EmployeeList