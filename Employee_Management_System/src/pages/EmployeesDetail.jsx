
const EmployeesDetail = () => {

    let sortedEmployees = [];
    return (
        <section className="relative bg-black min-h-screen py-10">
            {/* Background Elements */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-20 right-20 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl" />
                <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4 leading-tight">
                        Employee
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 ml-3">
                            Management
                        </span>
                    </h1>
                    <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                        Manage your team efficiently with our comprehensive employee directory
                    </p>
                </div>
                <div className="bg-gray-800 rounded-2xl shadow-2xl border border-gray-700 overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead className="bg-gray-700">
                                <tr>
                                    <th className="px-6 py-4 text-yellow-50 capitalize text-left">
                                        series
                                    </th>
                                    <th className="px-6 py-4 text-yellow-50 capitalize text-left">
                                        employee name
                                    </th>
                                    <th className="px-6 py-4 text-yellow-50 capitalize text-left">
                                        department
                                    </th>
                                    <th className="px-6 py-4 text-yellow-50 capitalize text-left">
                                        salary
                                    </th>
                                    <th className="px-6 py-4 text-yellow-50 capitalize text-right">
                                        action
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-700">
                                {sortedEmployees.map((employee, index) => (
                                    <tr
                                        key={employee.id}
                                        className="hover:bg-gray-700 transition-colors duration-200"
                                        style={{ animationDelay: `${index * 0.1}s` }}
                                    >
                                        <td className="px-6 py-4">
                                            <div className="flex items-center space-x-3">
                                                <div className={`w-10 h-10 bg-gradient-to-br rounded-full flex items-center justify-center text-white text-sm font-semibold`}>
                                                    {employee.name}
                                                </div>
                                                <div className="text-white font-medium">{employee.name}</div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 text-gray-300 font-mono text-sm">{employee.id}</td>
                                        <td className="px-6 py-4">
                                            <span className="inline-flex px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-blue-500 to-purple-500 text-white">
                                                {employee.department}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-green-400 font-semibold">{employee.salary}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
                {sortedEmployees.length === 0 && (
                    <div className="text-center py-12">
                        <div className="text-gray-400 text-lg mb-2">No employees found</div>
                        <div className="text-gray-500 text-sm">Try adjusting your search criteria</div>
                    </div>
                )}
            </div>
        </section>
    )
}

export default EmployeesDetail