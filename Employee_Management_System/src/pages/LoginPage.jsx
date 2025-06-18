import React, { useState } from 'react'
import { toast } from 'react-toastify';

const LoginPage = ({ setLogin }) => {

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    function handleChange(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    function handleSubmit(e) {
        e.preventDefault();

        let adminDetail = {
            email: "admin123@gmail.com",
            password: "admin@123"
        }

        if (formData.email === adminDetail.email && formData.password === adminDetail.password) {
            setLogin(true)
            localStorage.setItem("isLogin", JSON.stringify(true))
            setFormData({
                email: '',
                password: ''
            })
            toast.success("Signed in successfully...!")
        } else {
            toast.error("Email or Password dosen't match...!")
        }

    }

    return (
        <section className="relative bg-black my-vh flex items-center justify-center py-10" >
            {/* Background Elements */}
            < div className="absolute inset-0 opacity-30" >
                <div className="absolute top-20 right-20 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-float" />
                <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-float" style={{ animationDelay: '3s' }} />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl animate-float" style={{ animationDelay: '6s' }} />
            </div >

            <div className="relative w-full max-w-md mx-auto px-4">
                <div className="">
                    <div className="relative bg-gray-800 rounded-2xl p-8 shadow-2xl border border-gray-700 backdrop-blur-sm">
                        <div className="text-center mb-8">
                            <h1 className="text-3xl font-bold text-white mb-2">
                                Welcome Back
                            </h1>
                            <p className="text-gray-400">
                                Sign in to your account to continue
                            </p>
                        </div>
                        <form className="space-y-6" onSubmit={(e) => handleSubmit(e)}>
                            {/* Email Field */}
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                                    placeholder="Enter your email"
                                />
                            </div>
                            {/* Password Field */}
                            <div>
                                <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                                    placeholder="Enter your password"
                                />
                            </div>
                            <div className="flex items-center justify-between">
                                <label className="flex items-center">
                                    <input
                                        type="checkbox"
                                        className="w-4 h-4 bg-gray-700 border border-gray-600 rounded focus:ring-2 focus:ring-blue-500 text-blue-600"
                                    />
                                    <span className="ml-2 text-sm text-gray-300">Remember me</span>
                                </label>
                                <a href="#" className="text-sm text-blue-400 hover:text-blue-300 transition-colors duration-300">
                                    Forgot password?
                                </a>
                            </div>
                            {/* Login Button */}
                            <button
                                className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800"
                            >
                                Sign In
                            </button>
                        </form>
                        {/* Floating Elements */}
                        <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-60" />
                        <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full opacity-60" />
                    </div>
                </div>
            </div>
        </section >
    )
}

export default LoginPage