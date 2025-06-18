import React from 'react'

const Home = () => {
    return (
        <section className="relative bg-black my-vh py-10 flex items-center">
            {/* Background Elements */}
            <div className="absolute inset-0 opacity-30">
                <div className="absolute top-20 right-20 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-float" />
                <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-float" style={{ animationDelay: '3s' }} />
            </div>
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="animate-slide-up">
                        <h2 className="text-5xl font-bold text-white mb-6 leading-tight">
                            Streamline Your
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                                Workforce Management
                            </span>
                        </h2>
                        <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                            Empower your organization with cutting-edge employee management solutions.
                            Track performance, manage schedules, and boost productivity with our intuitive platform.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 mb-8">
                            <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform">
                                Get Started Today
                            </button>
                            <button className="px-8 py-4 border-2 border-blue-400 text-blue-400 font-semibold rounded-xl hover:bg-blue-400 hover:text-white transition-all duration-300 backdrop-blur-sm">
                                Watch Demo
                            </button>
                        </div>
                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-8">
                            <div className="text-center">
                                <div className="text-3xl font-bold text-blue-400 mb-2">10K+</div>
                                <div className="text-gray-400 text-sm">Active Users</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-purple-400 mb-2">99.9%</div>
                                <div className="text-gray-400 text-sm">Uptime</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-pink-400 mb-2">500+</div>
                                <div className="text-gray-400 text-sm">Companies</div>
                            </div>
                        </div>
                    </div>
                    <div className="relative animate-scale-in">
                        <div className="relative bg-gray-800 rounded-2xl p-6 shadow-2xl border border-gray-700">
                            {/* Mock Dashboard */}
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-white font-semibold">Employee Dashboard</h3>
                                <div className="flex space-x-2">
                                    <div className="w-3 h-3 bg-red-500 rounded-full" />
                                    <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                                    <div className="w-3 h-3 bg-green-500 rounded-full" />
                                </div>
                            </div>
                            {/* Mock Chart */}
                            <div className="bg-gray-700 rounded-lg p-4 mb-4">
                                <div className="flex justify-between items-center mb-3">
                                    <span className="text-gray-300 text-sm">Performance Overview</span>
                                    <span className="text-green-400 text-sm">+12%</span>
                                </div>
                                <div className="h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded opacity-80" />
                            </div>
                            {/* Mock Employee Cards */}
                            <div className="space-y-3">
                                <div className="flex items-center space-x-3 bg-gray-700 rounded-lg p-3">
                                    <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                                        AS
                                    </div>
                                    <div className="flex-1">
                                        <div className="text-white text-sm font-medium">Alice Smith</div>
                                        <div className="text-gray-400 text-xs">Software Engineer</div>
                                    </div>
                                    <div className="w-3 h-3 bg-green-500 rounded-full" />
                                </div>
                                <div className="flex items-center space-x-3 bg-gray-700 rounded-lg p-3">
                                    <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                                        BJ
                                    </div>
                                    <div className="flex-1">
                                        <div className="text-white text-sm font-medium">Bob Johnson</div>
                                        <div className="text-gray-400 text-xs">Product Manager</div>
                                    </div>
                                    <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                                </div>
                            </div>
                        </div>
                        {/* Floating Elements */}
                        <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-60 animate-float" />
                        <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full opacity-60 animate-float" style={{ animationDelay: '2s' }} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home