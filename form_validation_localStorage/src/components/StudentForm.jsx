import { useState } from "react"

const StudentForm = ({ addStudent }) => {

    const [studentInput, setStudentInput] = useState({
        name: "", course: "1", contact: "", password: "", cPassword: "", gender: ""
    });

    const [error, setError] = useState({});
    function handleChange(e) {
        setStudentInput({ ...studentInput, [e.target.id]: e.target.value, })
        setError({ ...error, [e.target.id]: "" })
    }

    function handleSubmit(e) {
        e.preventDefault();

        let objError = {};

        if (studentInput.name.trim() === "") objError.name = "Please enter your name...";
        if (studentInput.gender === "") objError.gender = "Please select your gender...";
        if (studentInput.contact.trim() === "" || studentInput.contact.length != 10) objError.contact = "Please enter valid number...";
        if (studentInput.password.trim() <= 8) objError.password = "Password must be greater than 7 character or long...";
        if (studentInput.password !== studentInput.cPassword) objError.cPassword = "Passwords do not match...";
        setError(objError)

        if (Object.keys(objError).length === 0) {
            addStudent(studentInput);
            setStudentInput({ name: "", course: "1", contact: "", password: "", cPassword: "" })
        } else {
            return;
        }
    }
    return (
        <div className="w-3/12 p-5 bg-[#463aca] h-full m-5 rounded-xl">
            <form className="" onSubmit={handleSubmit}>
                <div className="my-5">
                    <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2 cursor-pointer" htmlFor="name">
                        Name
                    </label>
                    <input className="w-full border-b text-white py-2 px-4 mb-3 outline-none focus:border-0 focus:bg-white focus:text-black  bg-transparent shadow-xl" id="name" type="text" placeholder="John Doe" onChange={handleChange}
                        value={studentInput.name} />
                    {
                        error.name && <p className="text-red-500 text-xs italic">{error.name}</p>
                    }
                </div>
                {/* gender */}
                <div className="flex justify-evenly my-5 border-b py-2 shadow-lg">
                    <label className="flex items-center space-x-2">
                        <input type="radio" name="gender" defaultValue="male" className="accent-[#463aca] w-4 h-4" onChange={(e) => {
                            setStudentInput({ ...studentInput, [e.target.name]: e.target.value })
                        }} />
                        <span className="text-white">Male</span>
                    </label>
                    <label className="flex items-center space-x-2">
                        <input type="radio" name="gender" defaultValue="female" className="accent-[#463aca] w-4 h-4" onChange={(e) => {
                            setStudentInput({ ...studentInput, [e.target.name]: e.target.value })
                        }} />
                        <span className="text-white">Female</span>
                    </label>
                    {
                        error.gender && <p className="text-red-500 text-xs italic">{error.gender}</p>
                    }
                </div>
                {/* course */}
                <div className="mt-14 mb-8">
                    <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2 cursor-pointer" htmlFor="course">
                        course
                    </label>
                    <select name="course" className="capitalize w-full border-0 py-2 px-4 focus:bg-white focus:text-black bg-transparent  shadow-xl border-b focus:border-0 text-white" id="course" onChange={handleChange} value={studentInput.course}>
                        <option value="1">full-stack developer</option>
                        <option value="2">UI/UX graphic design</option>
                        <option value="3">AI/ML data science</option>
                        <option value="4">animation</option>
                    </select>
                </div>
                {/* contact */}
                <div className="mt-8">
                    <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2 cursor-pointer" htmlFor="contact">
                        CONTACT
                    </label>
                    <input className="w-full border-b text-white py-2 px-4 mb-3 outline-none focus:border-0 focus:bg-white focus:text-black  bg-transparent shadow-xl" id="contact" type="number" placeholder="0123456789" onChange={handleChange}
                        value={studentInput.contact} />
                    {
                        error.contact && <p className="text-red-500 text-xs italic">{error.contact}</p>
                    }
                </div>
                {/* password */}
                <div className="mt-14">
                    <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2 cursor-pointer" htmlFor="password">
                        password
                    </label>
                    <input className="w-full border-b text-white py-2 px-4 mb-3 outline-none focus:border-0 focus:bg-white focus:text-black  bg-transparent shadow-xl" id="password" type="password" placeholder="* * * * * * * *" onChange={handleChange}
                        value={studentInput.password} />
                    {
                        error.password && <p className="text-red-500 text-xs italic">{error.password}</p>
                    }
                </div>
                {/* confirm password */}
                <div className="">
                    <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2 cursor-pointer" htmlFor="cPassword">
                        confirm password
                    </label>
                    <input className="w-full border-b text-white py-2 px-4 mb-3 outline-none focus:border-0 focus:bg-white focus:text-black  bg-transparent shadow-xl" id="cPassword" type="password" placeholder="* * * * * * * *" onChange={handleChange}
                        value={studentInput.cPassword} />
                    {
                        error.cPassword && <p className="text-red-500 text-xs italic">{error.cPassword}</p>
                    }
                </div>
                <button className="capitalize bg-white px-8 py-3 rounded-full">
                    submit
                </button>
            </form>
        </div>
    )
}

export default StudentForm