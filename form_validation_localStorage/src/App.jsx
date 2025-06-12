import { useEffect, useState } from "react"
import StudentForm from "./components/StudentForm"

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

  console.log(students)

  return (
    <div className="h-[80vh]">
      <StudentForm addStudent={addStudent} />
    </div>
  )
}

export default App