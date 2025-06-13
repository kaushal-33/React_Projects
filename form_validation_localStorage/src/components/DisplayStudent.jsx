

const DisplayStudent = ({ studentArr, deleteStudent, editStudent }) => {

    function showCity(value) {
        switch (value) {
            case "1":
                return "fullstack development"
            case "2":
                return "UI/UX graphic design"
            case "3":
                return "AI/ ML data science"
            case "4":
                return "Animation"
        }
    }

    function handleDelete(id) {
        deleteStudent(id)
    }
    function handleEdit(student) {
        editStudent(student)
    }

    return (
        studentArr.length > 0 ? <div className="mt-5 h-full w-full me-5">
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg w-full">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 shadow-lg">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-5">
                        <tr className="bg-[#463aca] text-white">
                            <th scope="col" className="px-6 py-3">
                                student name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                gender
                            </th>
                            <th scope="col" className="px-6 py-3">
                                course
                            </th>
                            <th scope="col" className="px-6 py-3">
                                contact
                            </th>
                            <th scope="col" className="px-6 py-3">
                                password
                            </th>
                            <th scope="col" className="px-6 py-3 text-center">
                                action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {studentArr.map((student) => {
                            return <tr key={student.id} className="bg-white border-b border-gray-200">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap capitalize">
                                    {student.name}
                                </th>
                                <td className="px-6 py-4 capitalize">
                                    {student.gender}
                                </td>
                                <td className="px-6 py-4 capitalize">
                                    {showCity(student.course)}
                                </td>
                                <td className="px-6 py-4 capitalize">
                                    {student.contact}
                                </td>
                                <td className="px-6 py-4 ">
                                    {student.password}
                                </td>
                                <td className="px-6 py-4 flex gap-4 justify-center">
                                    <button className="border py-2 px-3" onClick={() => handleEdit(student)}>
                                        edit
                                    </button>
                                    <button className="border py-2 px-3" onClick={() => handleDelete(student.id)}>
                                        delete
                                    </button>
                                </td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        </div> :
            <div className="h-screen flex justify-center items-center w-full">
                <h2 className="text-5xl">
                    no student data found...🚫
                </h2>
            </div>
    )
}

export default DisplayStudent