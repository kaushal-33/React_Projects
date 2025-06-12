

const DisplayStudent = ({ studentArr }) => {

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

    return (
        <div className="mt-5 h-full w-full me-5">
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg w-full">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 shadow-lg">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-5">
                        <tr>
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
                            <th scope="col" className="px-6 py-3">
                                action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {studentArr.map((student) => {
                            return <tr key={student.id} className="bg-white border-b border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                    {student.name}
                                </th>
                                <td className="px-6 py-4">
                                    {student.gender}
                                </td>
                                <td className="px-6 py-4">
                                    {showCity(student.course)}
                                </td>
                                <td className="px-6 py-4">
                                    {student.contact}
                                </td>
                                <td className="px-6 py-4 ">
                                    {student.password}
                                </td>
                                <td className="px-6 py-4 flex gap-4">
                                    <button className="border py-2 px-3">
                                        edit
                                    </button>
                                    <button className="border py-2 px-3">
                                        delete
                                    </button>
                                </td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default DisplayStudent