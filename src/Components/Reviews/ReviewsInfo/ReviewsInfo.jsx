import ReviewsBlok from '../ReviewsBlok/ReviewsBlok'
import './ReviewsInfo.css'

export default function ReviewsInfo({ review, i18n, t}) {

  return (

    <div className='reviews-info'>
      <ReviewsBlok review={review} i18n={i18n} t={t}/>
    </div>
  )
}
