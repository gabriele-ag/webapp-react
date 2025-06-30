import ReviewsCard from "./ReviewsCard"

const ReviewsList = ({reviews}) => {
    return (
        <>  
            <div className="row row-cols-1 g-3">
                {reviews.map((curReview) => (
                    <div className="col" key={curReview.id}>
                        <ReviewsCard review={curReview}/>
                    </div>
                ))}
            </div>
        </>
    )
}

export default ReviewsList