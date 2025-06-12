import { useEffect, useState } from "react"
import StudentForm from "./components/StudentForm"
import DisplayStudent from "./components/displayStudent"

const App = () => {

  const [students, setStudents] = useState([])

  useEffect(() => {
    setStudents(JSON.parse(localStorage.getItem("studentDetails")) || [])
  }, [])
  useEffect(() => {
    localStorage.setItem("studentDetails", JSON.stringify(students))
  }, [students])

  function addStudent(student) {
    setStudents([...students, student]);
  }

  return (
    <div className="h-[80vh] flex">
      <StudentForm addStudent={addStudent} />
      <DisplayStudent studentArr={students} />
    </div>
  )
}

export default App