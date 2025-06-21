import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const EmployeesDetail = () => {
    const [sortedEmployees, setSortedEmployees] = useState([]);

    useEffect(() => {
        let employeesDetail = JSON.parse(localStorage.getItem("employeesDetail")) || [];
        setSortedEmployees(employeesDetail);
    }, []);

    const navigate = useNavigate();

    function handleDelete(id) {
        let remainingEmployee = sortedEmployees.filter((employee) => employee.id !== id);
        setSortedEmployees(remainingEmployee);
        localStorage.setItem("employeesDetail", JSON.stringify(remainingEmployee));
        toast.error("Employee deleted successfully");
    }

    function handleUpdate(id) {
        navigate(`/update-employee-form/${id}`);
    }

    const departmentColors = {
        'engineering': 'from-blue-500 to-blue-600',
        'marketing': 'from-purple-500 to-purple-600',
        'sales': 'from-green-500 to-green-600',
        'hr': 'from-pink-500 to-pink-600',
        'finance': 'from-indigo-500 to-indigo-600',
        'operations': 'from-yellow-500 to-yellow-600'
    };

    return (
        <section className="relative bg-gray-900 min-h-screen py-12">
            {/* Background Effects */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div className="absolute top-1/4 right-0 w-80 h-80 bg-blue-900 rounded-full mix-blend-overlay filter blur-[100px]" />
                <div className="absolute bottom-1/3 left-0 w-80 h-80 bg-purple-900 rounded-full mix-blend-overlay filter blur-[100px]" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-10">
                    <div>
                        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">
                            Employee <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Directory</span>
                        </h1>
                        <p className="text-gray-400 max-w-2xl">
                            Comprehensive overview of your organization's workforce with advanced management capabilities
                        </p>
                    </div>
                    <button
                        onClick={() => navigate("/employees-form")}
                        className="flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-medium rounded-lg hover:from-blue-500 hover:to-blue-600 transition-all duration-300 shadow hover:shadow-lg"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                        Add Employee
                    </button>
                </div>

                {/* Table */}
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl shadow-xl border border-gray-700 overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-700">
                            <thead className="bg-gray-700/50">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">ID</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Employee</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Department</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Salary</th>
                                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-300 uppercase tracking-wider">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-700/50">
                                {sortedEmployees.map((employee, idx) => (
                                    <tr key={employee.id} className="hover:bg-gray-700/30 transition-colors duration-150">
                                        <td className="px-3 py-4 whitespace-nowrap">
                                            <div className={`w-9 h-9 rounded-full flex items-center justify-center text-white text-sm font-semibold bg-gradient-to-br ${departmentColors[employee.department.toLowerCase()] || 'from-gray-500 to-gray-600'}`}>
                                                {idx + 1}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white capitalize">{employee.name}</td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className={`px-2.5 py-1 rounded-full text-xs font-medium capitalize ${departmentColors[employee.department.toLowerCase()] ? `bg-gradient-to-r ${departmentColors[employee.department.toLowerCase()]} text-white` : 'bg-gray-600 text-gray-200'}`}>
                                                {employee.department}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-green-400">
                                            ₹ {Number(employee.salary).toLocaleString()}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                            <div className="flex justify-end space-x-2">
                                                <button
                                                    onClick={() => handleUpdate(employee.id)}
                                                    className="inline-flex items-center px-3 py-1.5 border border-blue-500 rounded-md text-blue-400 hover:bg-blue-500 hover:text-white text-xs"
                                                >
                                                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                                    </svg>
                                                    Edit
                                                </button>
                                                <button
                                                    onClick={() => handleDelete(employee.id)}
                                                    className="inline-flex items-center px-3 py-1.5 border border-red-500 rounded-md text-red-400 hover:bg-red-500 hover:text-white text-xs"
                                                >
                                                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                    </svg>
                                                    Delete
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {sortedEmployees.length === 0 && (
                    <div className="text-center py-16">
                        <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <h3 className="mt-2 text-lg font-medium text-white">No employees found</h3>
                        <p className="mt-1 text-sm text-gray-400">Add a new employee to get started</p>
                        <div className="mt-6">
                            <button
                                onClick={() => navigate("/employees-form")}
                                className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
                            >
                                <svg className="-ml-1 mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                </svg>
                                Add Employee
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default EmployeesDetail;
 