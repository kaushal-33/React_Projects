import { useState } from "react"
import ReviewCard from "./ReviewCard";

const ReviewInput = () => {

    const [error, setError] = useState({});
    const [inputData, setInputData] = useState({
        firstName: "",
        rating: "",
        date: "",
        message: "",
    });

    const [review, setReview] = useState([]);

    const handleChange = (e) => {
        setInputData({ ...inputData, [e.target.id]: e.target.value })
        setError({ ...error, [e.target.id]: undefined })
    }

    const handleSubmit = () => {
        let newErrors = {};
        if (!inputData.firstName.trim()) newErrors.firstName = "Name is required.";
        if (!inputData.rating || inputData.rating === "") newErrors.rating = "Rating is required.";
        if (!inputData.message.trim()) newErrors.message = "Message cannot be empty.";

        if (Object.keys(newErrors).length) {
            setError(newErrors);
            return;
        }
        setReview(prev => [...prev, inputData]);
        setInputData({
            firstName: "",
            rating: "",
            date: "",
            message: "",
        })
        setError({});
    };

    console.log(review)

    return (
        <div className='min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100 py-8 px-4'>
            <div className='container mx-auto max-w-4xl'>

                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-4">
                        Share Your Experience
                    </h1>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        Your feedback helps us improve and helps others make informed decisions. We'd love to hear from you!
                    </p>
                </div>

                <div className='bg-white rounded-3xl shadow-2xl p-8 md:p-12 mb-8 border border-gray-100'>
                    <div className='grid gap-8 md:grid-cols-2'>
                        <div className="md:col-span-1">
                            <label htmlFor="firstName" className="flex items-center gap-2 mb-3 text-sm font-semibold text-gray-800 capitalize">
                                <span className="text-lg">👤</span>
                                Your Name
                            </label>
                            <input
                                type="text"
                                id="firstName"
                                className={`bg-gray-50 border-2 ${error.firstName ? "border-red-400 bg-red-50" : "border-gray-200 hover:border-purple-300 focus:border-purple-500"} text-gray-900 text-base rounded-xl focus:ring-4 focus:ring-purple-100 block w-full p-4 capitalize focus:outline-none transition-all duration-300 placeholder-gray-400`}
                                placeholder="Enter your name"
                                required
                                onChange={(e) => handleChange(e)}
                                value={inputData.firstName}
                            />
                            {error.firstName && <p className="text-red-500 text-sm mt-2 flex items-center gap-1"><span>⚠️</span>{error.firstName}</p>}
                        </div>

                        <div className="grid gap-6 md:grid-cols-2">
                            <div>
                                <label htmlFor="rating" className="flex items-center gap-2 mb-3 text-sm font-semibold text-gray-800 capitalize">
                                    <span className="text-lg">⭐</span>
                                    Rating
                                </label>
                                <select
                                    id="rating"
                                    className={`capitalize bg-gray-50 border-2 ${error.rating ? "border-red-400 bg-red-50" : "border-gray-200 hover:border-purple-300 focus:border-purple-500"} text-gray-900 text-base rounded-xl focus:ring-4 focus:ring-purple-100 focus:outline-none block w-full p-4 transition-all duration-300`}
                                    onChange={(e) => handleChange(e)}
                                    value={inputData.rating}
                                >
                                    <option value={""} className="text-gray-400 disabled:">Select rating</option>
                                    <option value={5}>⭐⭐⭐⭐⭐</option>
                                    <option value={4}>⭐⭐⭐⭐</option>
                                    <option value={3}>⭐⭐⭐</option>
                                    <option value={2}>⭐⭐</option>
                                    <option value={1}>⭐</option>
                                </select>
                                {error.rating && <p className="text-red-500 text-sm mt-2 flex items-center gap-1"><span>⚠️</span>{error.rating}</p>}
                            </div>

                            <div>
                                <label htmlFor="date" className='flex items-center gap-2 mb-3 text-sm font-semibold text-gray-800 capitalize'>
                                    <span className="text-lg">📅</span>
                                    Date
                                </label>
                                <input
                                    type="date"
                                    id="date"
                                    className="bg-gray-50 p-4 border-2 border-gray-200 hover:border-purple-300 focus:border-purple-500 focus:outline-none focus:ring-4 focus:ring-purple-100 text-gray-900 text-base rounded-xl block w-full transition-all duration-300"
                                    onChange={(e) => handleChange(e)}
                                    value={inputData.date}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="mt-8">
                        <label htmlFor="message" className="flex items-center gap-2 mb-3 text-sm font-semibold text-gray-800 capitalize">
                            <span className="text-lg">💭</span>
                            Your Review
                        </label>
                        <textarea
                            id="message"
                            rows={5}
                            className={`block p-4 w-full text-base text-gray-900 bg-gray-50 rounded-xl border-2 ${error.message ? "border-red-400 bg-red-50" : "border-gray-200 hover:border-purple-300 focus:border-purple-500"} focus:ring-4 focus:ring-purple-100 focus:outline-none transition-all duration-300 placeholder-gray-400 resize-none`}
                            placeholder="Share your detailed experience, what you liked, and any suggestions for improvement..."
                            onChange={(e) => handleChange(e)}
                            value={inputData.message}
                        />
                        {error.message && <p className="text-red-500 text-sm mt-2 flex items-center gap-1"><span>⚠️</span>{error.message}</p>}
                    </div>

                    {/* Submit Button */}
                    <div className="flex justify-center mt-10">
                        <button
                            type="button"
                            className="bg-gradient-to-r from-purple-600 via-purple-700 to-blue-600 hover:from-purple-700 hover:via-purple-800 hover:to-blue-700 text-white font-semibold rounded-2xl text-base px-12 py-4 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 capitalize flex items-center gap-3 focus:outline-none focus:ring-4 focus:ring-purple-300"
                            onClick={handleSubmit}
                        >
                            <span className="text-lg">🚀</span>
                            Submit Review
                        </button>
                    </div>
                </div>
                <ReviewCard reviews={review} />
            </div>
        </div>
    )
}

export default ReviewInput