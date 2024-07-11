import './Reviews.css'
import reviewsText from '../../../reviews.json';
import ReviewsInfo from './ReviewsInfo/ReviewsInfo';

import 'swiper/css'
import 'swiper/css/navigation'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
// import { useEffect, useState } from 'react';






export default function Reviews() {
    const chunkSize = 4;
    const reviewGroups = reviewsText.reduce((resultArray, item, index) => {
        const chunkIndex = Math.floor(index / chunkSize);

        if (!resultArray[chunkIndex]) {
            resultArray[chunkIndex] = [];
        }
        item.index = index;
        resultArray[chunkIndex].push(item);

        return resultArray;
    }, []);

    return (
        <div>
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







// export default function Reviews() {
//     const [slides, setSlides] = useState([]);

//     useEffect(() => {
//         const chunkSize = 4;
//         const chunks = [];
//         for (let i = 0; i < reviewsText.length; i += chunkSize) {
//             chunks.push(reviewsText.slice(i, i + chunkSize));
//         }
//         setSlides(chunks);
//     }, []);

//     return (
//         <div>
//             <Swiper navigation={true} modules={[Navigation]} className='mySwiper'>
//                 {slides.map((chunk, index) => (
//                     <SwiperSlide key={index}>
//                         <ReviewsInfo reviews={chunk} />
//                     </SwiperSlide>
//                 ))}
//             </Swiper>
//         </div>
//     );
// }




// export default function Reviews() {
//     return (
//         <div>
//             <Swiper navigation={true} modules={[Navigation]} className='mySwiper'>
//                 <SwiperSlide>
//                     <ReviewsInfo />
//                 </SwiperSlide>
//                 <SwiperSlide>Slide 2</SwiperSlide>
//                 <SwiperSlide>Slide 3</SwiperSlide>
//                 <SwiperSlide>Slide 4</SwiperSlide>
//             </Swiper>
//         </div>
//     )
// }
