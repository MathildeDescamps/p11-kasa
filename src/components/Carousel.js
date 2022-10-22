// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Navigation } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

function Carousel(props) {
    let pictures = props.pictures;
    return(
        <Swiper className="swiper" navigation={true} modules={[Navigation]}>
            {
                pictures.map((picture, index) => {
                    return <SwiperSlide key={index} className="swiper-slide" style={{ background: 'url('+picture+')' }}></SwiperSlide>
                })
            }
        </Swiper>
    )
}
export default Carousel;