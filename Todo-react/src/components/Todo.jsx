import { useEffect, useState } from "react"

const Todo = () => {

    const [enterTask, setEnterTask] = useState("");
    const [tasks, setTask] = useState([])
    const [filteredTask, setFilteredTask] = useState([])
    const [filterType, setfilterType] = useState("all")
    useEffect(() => {
        let fillteredArr = [];
        switch (filterType) {
            case "active":
                fillteredArr = tasks.filter((task) => task.isDone === false)
                break;
            case "completed":
                fillteredArr = tasks.filter((task) => task.isDone === true)
                break;
            default:
                fillteredArr = tasks;
                break;
        }

        setFilteredTask(fillteredArr)
        console.log(fillteredArr)
    }, [tasks, filterType])

    function handleAdd() {

        if (enterTask.trim() === "") return;

        let newTask = {
            id: Date.now(),
            name: enterTask,
            isDone: false,
        }
        setTask([...tasks, newTask]);
        setEnterTask("");
    }

    function handleDone(id) {
        let markAsDone = tasks.map((task) => {
            return task.id === id ? { ...task, isDone: true } : task;
        })
        setTask(markAsDone)
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white">
            <h1 className="text-5xl bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent text-center capitalize py-6 font-extrabold">
                todo list
            </h1>
            <p className="text-xl text-gray-300 mb-8 text-center font-mono capitalize">
                improve your productivity • Collect your achievements
            </p>
            <div className="glass-mor px-2 py-8">
                <h6 className="text-center mb-5 capitalize font-mono">add new task</h6>
                <div className="max-w-lg mx-auto">
                    <div className="relative">
                        <input type="search" value={enterTask} id="default-search" className="block w-full p-4 text-sm text-slate-400 rounded-full bg-slate-900 focus:outline-none" placeholder="Describe your new achievement..." onChange={(e) => setEnterTask(e.target.value)} />
                        <button type="button" className="text-white absolute top-2.5 end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 rounded-full text-sm px-4 py-1 bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l" onClick={handleAdd}>+ Add
                        </button>
                    </div>
                </div>
            </div>
            <div className="container px-3 mx-auto mt-8">
                {tasks.length > 0 ?
                    (<div className="flex justify-between glass-mor-dark mx-auto rounded-full p-1 mb-8 md:w-6/12">
                        <button onClick={() => setfilterType("all")} className="capitalize focus:bg-gradient-to-r from-purple-500 to-pink-500 sm:w-4/12 px-5 py-2 rounded-full">all</button>
                        <button onClick={() => setfilterType("active")} className="capitalize focus:bg-gradient-to-r from-purple-500 to-pink-500 sm:w-4/12 px-5 py-2 rounded-full">active</button>
                        <button onClick={() => setfilterType("completed")} className="capitalize  focus:bg-gradient-to-r from-purple-500 to-pink-500 sm:w-4/12 px-5 py-2 rounded-full">completed</button>
                    </div>)
                    :
                    (<div className="text-center"><span><i className="ri-arrow-up-line"></i></span></div>)}
                <div className="relative shadow-md sm:rounded-lg overflow-x-auto">
                    {tasks.length > 0 ?
                        <table className="glass-mor w-full text-sm text-left rtl:text-right text-gray-800">
                            <thead className=" text-gray-200 uppercase">
                                <tr>
                                    <th scope="col" className="px-6 py-3">
                                        Tasks
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-center">
                                        Status
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-center">
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredTask.length > 0 ?
                                    (filteredTask.map((task) => {
                                        return (
                                            <tr className="bg-slate-900 border-t-2 text-slate-400" key={task.id}>
                                                <th scope="row" className="px-6 capitalize border-e-slate-400 py-4 font-medium  whitespace-nowrap">
                                                    {task.name}
                                                </th>
                                                <td className="px-6 capitalize border-e-slate-400 py-4 text-center">
                                                    {task.isDone ? (<span className="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-1 rounded-full dark:bg-green-900 dark:text-green-300">Completed</span>
                                                    ) : (<span className="bg-yellow-100 text-yellow-800 text-xs font-medium me-2 px-2.5 py-1 rounded-full dark:bg-yellow-900 dark:text-yellow-300">pending</span>
                                                    )}
                                                </td>
                                                <td className="px-6 py-4">
                                                    <div className="flex items-center gap-6 justify-center">
                                                        <button className="" onClick={(e) => {
                                                            handleDone(task.id);
                                                        }}>
                                                            {task.isDone == true ?
                                                                <span className="text-2xl text-green-600">
                                                                    <i className="ri-checkbox-circle-line" />
                                                                </span>
                                                                :
                                                                <span className="text-2xl text-green-200">
                                                                    <i className="ri-checkbox-circle-line" />
                                                                </span>
                                                            }

                                                        </button>
                                                        <p className="capitalize">mark as completed</p>
                                                    </div>
                                                </td>
                                            </tr>
                                        )
                                    }))
                                    :
                                    (
                                        <tr className="bg-slate-900 border-t-2 text-slate-400">
                                            <td className="capitalize py-10 w-full text-center text-yellow-200 mb-4 text-2xl">
                                                no task found!
                                            </td>
                                            <td className="capitalize py-10 w-full text-center text-yellow-200 mb-4 text-2xl">
                                                -
                                            </td>
                                            <td className="capitalize py-10 w-full text-center text-yellow-200 mb-4 text-2xl">
                                                -
                                            </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>
                        :
                        <div className="py-10">
                            <h2 className="capitalize text-center text-yellow-200 mb-4 text-4xl">no task!</h2>
                            <p className="capitalize text-center text-3xl">add task from above...</p>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default Todo