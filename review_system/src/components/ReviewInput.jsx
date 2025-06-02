import React from 'react'

const ReviewInput = () => {
    return (
        <div className='container mx-auto sm:p-0 p-5'>
            <div className='mt-10 grid gap-6 mb-6 md:grid-cols-2'>
                <div>
                    <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900">name</label>
                    <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-[10px]" placeholder="John" required />
                </div>
                <div className="grid gap-6 mb-6 md:grid-cols-2">
                    <div className=''>
                        <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900">Select an option</label>
                        <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                            <option defaultValue={""}>Choose a country</option>
                            <option value="US">United States</option>
                            <option value="CA">Canada</option>
                            <option value="FR">France</option>
                            <option value="DE">Germany</option>
                        </select>
                    </div>
                    <div className=''>
                        <label htmlFor="date" className='block mb-2 text-sm font-medium text-gray-900'>date</label>
                        <input type="date" id="date" className='"bg-gray-50 p-[10PX] border border-gray-300 bg-gray-50 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full' />
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-90">Your message</label>
                    <textarea id="message" rows={4} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Write your thoughts here..." />
                </div>
            </div>
            <button type="button" class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mt-8 mb-2">Purple to Blue</button>
        </div>
    )
}

export default ReviewInput