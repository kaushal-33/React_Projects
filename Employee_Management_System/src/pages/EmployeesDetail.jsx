import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const EmployeesDetail = () => {

    const [sortedEmployees, setSortedEmployees] = useState([]);

    useEffect(() => {
        let employeesDetail = JSON.parse(localStorage.getItem("employeesDetail")) || []
        setSortedEmployees(employeesDetail)
    }, [])
    let navigate = useNavigate();

    function handleDelete(id) {
        let remainingEmployee = sortedEmployees.filter((employee) => employee.id != id)
        setSortedEmployees(remainingEmployee)
        localStorage.setItem("employeesDetail", JSON.stringify(remainingEmployee))
        toast.error("Employee deleted...!")
    }

    function handleUpdate(id) {
        navigate(`/update-employee-form/${id}`)
    }

    return (
        <section className="relative bg-black min-h-screen py-10">
            {/* Background Elements */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-20 right-20 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl" />
                <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-12 flex flex-wrap justify-between items-center">
                    <div className="">
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
                    <div>
                        <button onClick={() => { navigate("/employees-form") }} className="px-8 capitalize py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform">
                            + add new employee
                        </button>
                    </div>
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
                                    <th className="px-6 py-4 text-yellow-50 capitalize">
                                        action
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-700">
                                {sortedEmployees.map((employee, index) => (
                                    <tr
                                        key={employee.id}
                                        className="hover:bg-gray-700 transition-colors duration-200"
                                    >
                                        <td className="px-6 py-4">
                                            <div className="flex items-center space-x-3">
                                                <div className={`w-10 h-10 bg-gradient-to-br rounded-full flex items-center justify-center text-white text-sm font-semibold`}>
                                                    {index + 1}
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 text-gray-300 font-mono text-sm capitalize">{employee.name}</td>
                                        <td className="px-6 py-4">
                                            <span className="inline-flex px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-blue-500 to-purple-500 text-white">
                                                {employee.department}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-green-400 font-semibold">{employee.salary}</td>
                                        <td className="text-center">
                                            <button onClick={() => handleUpdate(employee.id)} className="text-white rounded-full capitalize px-3 py-1 bg-green-500">edit</button>
                                            <button onClick={() => handleDelete(employee.id)} className="text-white rounded-full capitalize px-3 py-1 bg-red-500 ms-2">delete
                                            </button>
                                        </td>
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