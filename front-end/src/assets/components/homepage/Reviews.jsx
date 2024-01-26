import {
    FaArrowLeft,
    FaArrowRight,
    FaCheckCircle,
    FaStar,
    FaChevronLeft,
    FaChevronRight,
} from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";

const Reviews = () => {
    return (
        <section>
            <div className="container mx-auto w-[80%] py-[80px]">
                <div className="flex items-center justify-between">
                    <h1 className="text-[30px] font-bold lg:text-[40px]">
                        OUR HAPPY CUSTOMERS
                    </h1>
                    <div className="flex items-center gap-2">
                        <button className="button-prev">
                            <FaChevronLeft className="text-xl cursor-pointer" />
                        </button>
                        <button className="button-next">
                            <FaChevronRight className="text-xl cursor-pointer"/>
                        </button>
                    </div>
                </div>
                {/* ========= COMMENTS =========== */}
                <div className="mx-5">
                    <Swiper
                        modules={[Navigation, Pagination]}
                        navigation={{
                            nextEl: ".button-next",
                            prevEl: ".button-prev",
                        }}
                        breakpoints={{
                            400: {
                                slidesPerView: 1,
                                spaceBetween: 20,
                            },
                            640: {
                                slidesPerView: 1,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 40,
                            },
                            992: {
                                slidesPerView: 3,
                                spaceBetween: 20,
                            },
                            1024: {
                                slidesPerView: 4,
                                spaceBetween: 20,
                            },
                        }}
                    >
                        {data.map((review, index) => (
                            <SwiperSlide>
                                <div
                                    key={index}
                                    className="border border-gray-200 rounded-xl  h-[230px] p-8 my-5"
                                >
                                    <div className="flex items-center gap-0.5">
                                        <FaStar className="text-yellow-400 text-lg" />
                                        <FaStar className="text-yellow-400 text-lg" />
                                        <FaStar className="text-yellow-400 text-lg" />
                                        <FaStar className="text-yellow-400 text-lg" />
                                        <FaStar className="text-yellow-400 text-lg" />
                                    </div>
                                    <div className="flex items-center gap-1 my-2">
                                        <h4 className="text-lg font-medium">
                                            {review.name}
                                        </h4>
                                        <span className="text-green-600">
                                            <FaCheckCircle />
                                        </span>
                                    </div>
                                    <div>
                                        <p className="text-gray-400">
                                            "{review.comment}.”
                                        </p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
};
const data = [
    {
        name: "John Doe",
        comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
        name: "Jane Smith",
        comment:
            "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
        name: "Alice Johnson",
        comment:
            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
        name: "Bob Brown",
        comment:
            "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
        name: "Emily Davis",
        comment:
            "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
        name: "Michael Wilson",
        comment:
            "Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.",
    },
];

// function SlideButton() {
//     const swiper = useSwiper();

//     return (
//         <>
//             <button onClick={() => swiper.slideNext()}>
//                 Slide to the next slide
//             </button>
//             <button onClick={() => swiper.slidePrev()}>
//                 Slide to the prev slide
//             </button>
//         </>
//     );
// }
export default Reviews;
