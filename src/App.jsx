
import React from "react"
import { Route, Routes } from "react-router-dom"
import Home from './pages/home'
import Login from './pages/Login'
import SignUp from './pages/Signup'
import Forgotpwd from './pages/ForgotPWD'
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<Forgotpwd />} />
      </Routes>
    </>
  )
}

export default App