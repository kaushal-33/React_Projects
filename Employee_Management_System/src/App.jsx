import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import { useEffect, useState } from 'react'
import LoginPage from './pages/LoginPage'
import { ToastContainer } from 'react-toastify';
import About from './pages/About'
import Contact from './pages/Contact'

const App = () => {

  const [loginStatus, setLoginStatus] = useState(false)

  useEffect(() => {
    let isLogin = JSON.parse(localStorage.getItem("isLogin")) || false
    setLoginStatus(isLogin);
  }, [])

  return (
    <BrowserRouter>
      <Header loginUpdate={loginStatus} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<LoginPage setLogin={setLoginStatus} />} />
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  )
}

export default App