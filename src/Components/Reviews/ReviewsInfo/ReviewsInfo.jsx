import ReviewsBlok from '../ReviewsBlok/ReviewsBlok'
import './ReviewsInfo.css'
// import reviewsText from '../../../../reviews.json'

export default function ReviewsInfo({ review }) {

  console.log(review)
  return (

    <div className='reviews-info'>
      <ReviewsBlok review={review} />
    </div>
  )
}
