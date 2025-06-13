import { useEffect, useState } from "react"
import StudentForm from "./components/StudentForm"
import DisplayStudent from "./components/displayStudent"

const App = () => {

  const [students, setStudents] = useState([])
  const [updateStudent, setUpdateStudent] = useState(null)
  useEffect(() => {
    setStudents(JSON.parse(localStorage.getItem("studentDetails")) || [])
  }, [])
  useEffect(() => {
    localStorage.setItem("studentDetails", JSON.stringify(students))
  }, [students])

  function addStudent(student) {
    if (updateStudent) {
      setStudents([...students, updateStudent])
    } else {
      setStudents([...students, student]);
    }
  }

  function deleteStudent(id) {
    let newstudentList = students.filter((student) => {
      return student.id !== id;
    })

    setStudents(newstudentList);
  }

  function editStudent(editStudent) {
    setUpdateStudent(editStudent);
  }

  function updatedStudent(updatedStudent) {




  }

  return (
    <div className="flex py-5">
      <StudentForm addStudent={addStudent} editStudent={updateStudent} />
      <DisplayStudent studentArr={students} deleteStudent={deleteStudent} editStudent={editStudent} />
    </div>
  )
}

export default App