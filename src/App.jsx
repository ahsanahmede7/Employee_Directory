import "./App.css"
import Navbar from "./component/Navbar"
import EmployeeForm from "./component/EmployeeForm"
import EmployeeCard from './component/EmployeeCard'
import EmployeeList from './component/EmployeeList'
import { BrowserRouter,Routes,Route, HashRouter } from "react-router-dom"
import ErrorPage from './component/Error'
// SignUp
import Home from "./Home"
import ProtectedRoute from "./component/protectedroute"
import SignUp from "./auth/signup"
import Login from "./component/Login"





function App(){
  return(
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route path="/Login" element={<Login/>}></Route>
    <Route path="/Signup" element={<SignUp/>}></Route>
    <Route path="/" element={<ProtectedRoute children={<Home />} />} />
    {/* <Route path='/' element={<Home/>}></Route> */}
    <Route path="/EmployeeCard" element={<ProtectedRoute children={<EmployeeCard />} />} ></Route>
    <Route path="/EmployeeForm" element={<ProtectedRoute children={<EmployeeForm/>} />}></Route>
    <Route path="/EmployeeList" element={<ProtectedRoute children={<EmployeeList/>} />}></Route>
    <Route path="*" element={<ErrorPage/>}></Route>

    </Routes>
    
    
    </BrowserRouter>
  )
}
export default App;