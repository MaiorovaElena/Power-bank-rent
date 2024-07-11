import ReviewsBlok from '../ReviewsBlok/ReviewsBlok'
import './ReviewsInfo.css'
// import reviewsText from '../../../../reviews.json'

export default function ReviewsInfo({review}) {

    console.log(review)
  return (

    <div className='reviews-info'>
            <ReviewsBlok review={review}/>
    </div>
    // <div className='reviews-info'>
    //     {reviewsText.slice(0, 4).map((review, index) => (
    //         <ReviewsBlok key={index} {...review} index={index}/>
    //     ))}
    // </div>
  )
}
