import './Reviews.css'
import reviewsText from '../../../reviews.json';
import ReviewsInfo from './ReviewsInfo/ReviewsInfo';

import 'swiper/css'
import 'swiper/css/navigation'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';






export default function Reviews() {
    const chunkSize = 4;
    const reviewGroups = reviewsText.reduce((resultArray, item, index) => {
        const chunkIndex = Math.floor(index / chunkSize);

        if (!resultArray[chunkIndex]) {
            resultArray[chunkIndex] = [];
        }

        resultArray[chunkIndex].push(item);

        return resultArray;
    }, []);

    return (
        <div className='review-container'>
            <Swiper navigation={true} modules={[Navigation]} className='mySwiper'>
                {reviewGroups.map((group, groupIndex) => (
                    <SwiperSlide key={groupIndex}>
                        <div className="group-container-reviews">
                            {group.map((review, index) => (
                                <ReviewsInfo key={index} review={review} />
                            ))}
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}