import ReviewsCard from "./ReviewsCard"

const ReviewsList = ({reviews}) => {
    return (
        <>  
            <div>
                {reviews.map((curReview) => (
                    <div className="col" key={curReview.id}>
                        <ReviewsCard reviews={curReview}/>
                    </div>
                ))}
            </div>
        </>
    )
}

export default ReviewsList