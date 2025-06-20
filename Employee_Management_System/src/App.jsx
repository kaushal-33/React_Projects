import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import { useEffect, useState } from 'react'
import LoginPage from './pages/LoginPage'
import { ToastContainer } from 'react-toastify';
import About from './pages/About'
import Contact from './pages/Contact'
import EmployeesDetail from './pages/EmployeesDetail'
import EmployeeForm from './pages/EmployeeForm'
import ProtectedRoute from './pages/ProtectedRoute'
import updateEmployeeForm from './pages/updateEmployeeForm'

const App = () => {

  const [loginStatus, setLoginStatus] = useState(false)

  useEffect(() => {
    let isLogin = JSON.parse(localStorage.getItem("isLogin")) || false
    setLoginStatus(isLogin);
  }, [])

  function updateEmployee(id) {

  }

  return (
    <BrowserRouter>
      <Header loginUpdate={loginStatus} setLogin={setLoginStatus} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<LoginPage setLogin={setLoginStatus} />} />
        <Route path='/employees-detail' element={<ProtectedRoute Component={EmployeesDetail} />} />
        <Route path='/employees-form' element={<ProtectedRoute Component={EmployeeForm} />} />
        <Route path='/update-employee-form/:id' element={<ProtectedRoute Component={updateEmployeeForm} />} />
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  )
}

export default App