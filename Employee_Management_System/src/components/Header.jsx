import { Link, useNavigate } from "react-router-dom"

const Header = ({ loginUpdate, setLogin }) => {
    let navigate = useNavigate()
    let handleLogin = () => {
        navigate("/login")
    }
    let handleLogout = () => {
        localStorage.setItem("isLogin", JSON.stringify(false))
        setLogin(false)
        navigate("/")
    }
    console.log(loginUpdate)

    return (
        <header className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 animate-gradient overflow-hidden sticky top-0 z-50">
            {/* Abstract Background Elements */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-0 left-0 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl animate-float" />
                <div className="absolute top-0 right-0 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-float" style={{ animationDelay: '2s' }} />
                <div className="absolute -bottom-32 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl animate-float" style={{ animationDelay: '4s' }} />
            </div>
            {/* Geometric Pattern Overlay */}
            <div className="absolute inset-0 opacity-10">
                <svg className="w-full h-full" viewBox="0 0 100 20" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="grid" width={10} height={10} patternUnits="userSpaceOnUse">
                            <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
            </div>
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo Section */}
                    <div className="flex items-center space-x-4">
                        <div className="relative">
                            <div className="w-12 h-12 bg-white bg-opacity-20 backdrop-blur-lg rounded-xl flex items-center justify-center animate-pulse-glow">
                                <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <div className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-400 rounded-full animate-ping" />
                        </div>
                        <div className="text-white">
                            <h1 className="text-2xl font-bold tracking-tight">EmployeeHub</h1>
                            <p className="text-blue-100 text-sm opacity-90">Management System</p>
                        </div>
                    </div>
                    {/* Navigation */}
                    <nav className="hidden md:flex items-center space-x-8">
                        <Link to={"/"} className="text-white hover:text-blue-200 transition-colors duration-200 relative group">
                            Home
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-200 transition-all duration-200 group-hover:w-full" />
                        </Link>
                        <Link to={"/about"} className="text-white hover:text-blue-200 transition-colors duration-200 relative group">
                            About
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-200 transition-all duration-200 group-hover:w-full" />
                        </Link>
                        <Link to={"/contact"} className="text-white hover:text-blue-200 transition-colors duration-200 relative group">
                            Contact
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-200 transition-all duration-200 group-hover:w-full" />
                        </Link>
                        {
                            loginUpdate &&
                            <Link to={"/employees-detail"} className="text-white hover:text-blue-200 transition-colors duration-200 relative group">
                                Employees
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-200 transition-all duration-200 group-hover:w-full" />
                            </Link>
                        }
                    </nav>
                    <div className="flex items-center space-x-4">
                        {/* Profile */}
                        <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-white font-semibold shadow-lg animate-pulse-glow">
                                {loginUpdate ? "JD" : "L"}
                            </div>
                            {
                                loginUpdate &&
                                <div className="hidden sm:block text-white">
                                    <p className="text-sm font-medium">John Doe</p>
                                    <p className="text-xs text-blue-100 opacity-75">Admin</p>
                                </div>
                            }
                            {
                                loginUpdate ?
                                    <button className="btn capitalize px-3 py-1 bg-red-600 rounded-full text-white" onClick={() => handleLogout()}>
                                        logout
                                    </button> :
                                    <button className="btn capitalize bg-green-600 px-3 py-1 rounded-full text-white" onClick={() => handleLogin()}>
                                        login
                                    </button>
                            }

                        </div>
                        {/* Mobile Menu Button */}
                        <button className="md:hidden p-2 text-white hover:bg-white hover:bg-opacity-20 rounded-lg transition-all duration-200">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </header>

    )
}

export default Header