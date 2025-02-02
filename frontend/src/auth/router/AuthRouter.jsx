import { Route, Routes } from "react-router"
import { Login } from "../views/Login"
import { Register } from "../views/Register"

export const AuthRouter = () => {
  return (
    <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route/>
    </Routes>
  )
}
