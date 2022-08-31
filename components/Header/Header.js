// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay} from "swiper";

function Card(){
    return(
        <div className="w-full">
            <div
                className='bg-[url("https://images.unsplash.com/photo-1519415943484-9fa1873496d4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80")] object-cover h-[600px] w-full bg-cover bg-center p-12'>
                <h2 className="text-2xl text-purple-600">Tailwind CSS Overlay Image Card</h2>
                <p className="mb-8 text-gray-800">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo </p>
                <button className="px-4 py-2 text-purple-100 bg-purple-600 rounded">Read more</button>
            </div>
        </div>
    )
}
export default function Header() {
    return (
        <div className="">

            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay]}
                className="mySwiper"
            >


                <SwiperSlide>
                    <Card/>
                </SwiperSlide>

                <SwiperSlide>
                    <Card/>
                </SwiperSlide>

                <SwiperSlide>
                    <Card/>
                </SwiperSlide>

                <SwiperSlide>
                    <Card/>
                </SwiperSlide>

            </Swiper>
        </div>
    )
}

