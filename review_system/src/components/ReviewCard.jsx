
const ReviewCard = ({ reviews }) => {
    return (
        reviews.length === 0 ?
            (
                <div className="mt-12">
                    <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Recent Reviews</h3>
                    <div className="text-center text-gray-500 py-8">
                        <div className="text-4xl mb-4">📝</div>
                        <p className="text-lg">No reviews yet. Be the first to share your experience!</p>
                    </div>
                </div>
            )
            :
            (
                <div className="mt-12">
                    <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Recent Reviews</h3>
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {reviews.map((review, index) => (
                            <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 hover:border-purple-200">
                                <div className="flex items-center justify-between mb-4">
                                    <h4 className="font-semibold text-gray-800 text-lg capitalize">{review.firstName}</h4>
                                    <div className="text-2xl">
                                        {'⭐'.repeat(parseInt(review.rating))}
                                    </div>
                                </div>
                                {review.date && (
                                    <p className="text-sm text-gray-500 mb-3">{review.date}</p>
                                )}
                                <p className="text-gray-700 leading-relaxed">{review.message}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )
    )
}

export default ReviewCard