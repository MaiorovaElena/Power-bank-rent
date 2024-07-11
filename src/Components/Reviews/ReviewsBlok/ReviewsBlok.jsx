import './ReviewsBlok.css'
// import one from '../../../assets/reviews/0.png'
// import file from '../../../assets/reviews'

import config from '../../../../config'

export default function ReviewsBlok({ review }) {


    const { name, text, data, index } = review;

    console.log(config.imagePath);
    console.log(index);

    // const fileL =  require(file/${index}.png).default
    // console.log(review)
    return (
        <div className='reviews-blok'>
            <div>
                <img src={`${config.imagePath}${index}.png`} alt={`${index} png`} />
            </div>
            <div>
                <h3>{name}</h3>
                <p>{text}</p>
                <p>{data}</p>
            </div>
        </div>
    )
}
