import './ReviewsBlok.css'

export default function ReviewsBlok({ review }) {


    const { name, text, data, image } = review;

    return (
        <div className='reviews-blok'>
            <div className='reviews-blok-picture'>
                <img src={image} className='reviews-blok-img' alt={`image`} />
            </div>
            <div className='reviews-blok-info'>
                <h3 className='reviews-blok-name'>{name}</h3>
                <p className='reviews-blok-text'>"{text}"</p>
                <p className='reviews-blok-data'>{data}</p>
            </div>
        </div>
    )
}
