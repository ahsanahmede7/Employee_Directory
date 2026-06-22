import { Navigate } from "react-router-dom"

const ProtectedRoute = ({ children }) => {
    let token = localStorage.getItem("user")
    console.log(token)
    return token ? children : <Navigate to={"/Login"} />
}

export default ProtectedRoute